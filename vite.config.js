import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
  resolve: {
    // Point React imports at thin shims that re-export window.React (CDN UMD).
    // This ensures the app and the pre-built DS bundle share a single React instance.
    alias: {
      'react': resolve(__dirname, 'src/vendor/react.js'),
      'react-dom/client': resolve(__dirname, 'src/vendor/react-dom-client.js'),
      'react-dom': resolve(__dirname, 'src/vendor/react-dom.js'),
      'react/jsx-runtime': resolve(__dirname, 'src/vendor/react-jsx-runtime.js'),
      'react/jsx-dev-runtime': resolve(__dirname, 'src/vendor/react-jsx-runtime.js'),
    },
  },
});
