/* Thin shim — re-exports React from the CDN UMD global (window.React).
   Allows Vite imports to share the same instance as the DS bundle. */
const R = window.React;
export default R;
export const {
  useState, useEffect, useRef, useCallback, useMemo, useContext,
  Fragment, createElement, cloneElement, forwardRef, memo,
  createContext, Children, createRef,
} = R;
