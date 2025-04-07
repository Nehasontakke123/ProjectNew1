import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ✅ Allows access from network
    port: 5173, // ✅ Ensures correct port usage
    strictPort: true, // ✅ Prevents automatic port switching
    hmr: {
      protocol: 'ws', // ✅ WebSocket protocol fix
      clientPort: 5173, // ✅ Ensures WebSocket works on the correct port
    },
  },
  define: {
    global: 'window', // ✅ Define global as window
  },
});
