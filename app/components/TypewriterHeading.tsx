"use client";

import React, { useState, useEffect } from "react";

export function TypewriterHeading() {
  const words = ["Excel", "CSV", "Tally XML"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      const fullWord = words[wordIndex];

      if (!isDeleting) {
        // Typing text
        const nextText = fullWord.slice(0, currentText.length + 1);
        setCurrentText(nextText);
        setDelay(100 + Math.random() * 50);

        if (nextText === fullWord) {
          setIsDeleting(true);
          setDelay(2000); // Pause on complete word
        }
      } else {
        // Deleting text
        const nextText = fullWord.slice(0, currentText.length - 1);
        setCurrentText(nextText);
        setDelay(50);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setDelay(300); // Pause before next word
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, delay, mounted]);

  return (
    <span className="text-secondary bg-secondary/10 px-4 py-1.5 border-2 border-shadow-color brutal-shadow inline-flex items-center transform -rotate-1 mt-2 select-none min-w-[230px] xs:min-w-[270px] sm:min-w-[340px] max-w-full text-left justify-start">
      <span className="text-foreground font-bold mr-1.5">PDF to</span>
      <span className="text-secondary font-extrabold">{currentText}</span>
      <span className="ml-0.5 text-secondary font-bold select-none animate-blink">
        |
      </span>
    </span>
  );
}


