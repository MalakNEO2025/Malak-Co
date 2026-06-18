/* Shim — these are never imported with classic JSX runtime, but suppress Vite warnings */
export const jsx = window.React.createElement;
export const jsxs = window.React.createElement;
export const Fragment = window.React.Fragment;
