"use client";

import { useState, useRef } from "react";
import { Upload, FileText, ArrowRight, CheckCircle2, Lock, Loader2, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

interface UploadZoneProps {
  onFileSelect?: (file: File) => void;
  compact?: boolean;
}

export function UploadZone({ onFileSelect, compact = false }: UploadZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (onFileSelect) onFileSelect(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (onFileSelect) onFileSelect(file);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer group ${
        dragActive
          ? "border-zinc-950 bg-zinc-100/80 scale-[0.99]"
          : "border-zinc-200 hover:border-zinc-400 bg-white hover:bg-zinc-50/50 shadow-2xs"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.png,.jpg,.jpeg,.webp"
        onChange={handleChange}
        className="hidden"
      />

      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white transition-all shadow-2xs">
          <Upload className="w-5 h-5" />
        </div>

        {selectedFile ? (
          <div className="space-y-1">
            <p className="text-xs font-bold text-zinc-950 flex items-center justify-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-600" />
              {selectedFile.name}
            </p>
            <p className="text-[10px] font-mono text-zinc-400">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to parse
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight">
              Drag & Drop Bank Statement PDF or Image
            </h3>
            <p className="text-[11px] text-zinc-500 mt-1">
              Supports HDFC, ICICI, SBI, Axis, Kotak, PNB & all 25+ Indian banks
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-mono text-zinc-600">
            PDF
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-mono text-zinc-600">
            PNG/JPG
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
            <Lock className="w-2.5 h-2.5" /> Password Protected
          </span>
        </div>
      </div>
    </div>
  );
}
