/* Thin shim — exposes ReactDOM.createRoot from the CDN UMD global. */
export const createRoot = (container, opts) => window.ReactDOM.createRoot(container, opts);
export default { createRoot };
