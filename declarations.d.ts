// Ambient type declarations to satisfy IDE TypeScript language server
// when node_modules is not locally installed.

declare module 'react' {
  export = React;
  export as namespace React;
  namespace React {
    type ReactNode = any;
    type FC<P = {}> = (props: P) => any;
    type ComponentType<P = {}> = any;
    type CSSProperties = any;
    function useState<T>(initial: T | (() => T)): [T, (val: T | ((prev: T) => T)) => void];
    function useEffect(effect: () => any, deps?: any[]): void;
    function useRef<T>(initial?: T): { current: T };
    function useMemo<T>(factory: () => T, deps: any[]): T;
    function useCallback<T extends Function>(callback: T, deps: any[]): T;
    function createContext<T>(defaultValue: T): any;
    function useContext<T>(context: any): T;
    const Fragment: any;
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface Element extends React.ReactNode {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'next' {
  export interface Metadata {
    title?: any;
    description?: string;
    alternates?: any;
    keywords?: string[] | string;
    openGraph?: any;
    twitter?: any;
    robots?: any;
    applicationName?: string;
    authors?: any[];
    creator?: string;
    publisher?: string;
    generator?: string;
    metadataBase?: URL;
    icons?: any;
    category?: string;
    [key: string]: any;
  }
  export interface Viewport {
    themeColor?: string;
    width?: string;
    initialScale?: number;
    [key: string]: any;
  }
}

declare module 'next/link' {
  import { ComponentType } from 'react';
  const Link: ComponentType<any>;
  export default Link;
}

declare module 'next/image' {
  import { ComponentType } from 'react';
  const Image: ComponentType<any>;
  export default Image;
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function usePathname(): string;
  export function useSearchParams(): any;
}

declare module 'lucide-react' {
  import { ComponentType } from 'react';
  export const ArrowRight: ComponentType<any>;
  export const ArrowDownUp: ComponentType<any>;
  export const FileText: ComponentType<any>;
  export const CheckCircle2: ComponentType<any>;
  export const Shield: ComponentType<any>;
  export const Zap: ComponentType<any>;
  export const Check: ComponentType<any>;
  export const Lock: ComponentType<any>;
  export const Download: ComponentType<any>;
  export const Sparkles: ComponentType<any>;
  export const AlertCircle: ComponentType<any>;
  export const RefreshCw: ComponentType<any>;
  export const Upload: ComponentType<any>;
  export const Menu: ComponentType<any>;
  export const X: ComponentType<any>;
  export const ChevronRight: ComponentType<any>;
  const anyComponent: ComponentType<any>;
  export default anyComponent;
}

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
  }
  interface Process {
    env: ProcessEnv;
  }
}

declare const process: NodeJS.Process;
