import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [], // Removed the @vitejs/plugin-react plugin
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






// import { defineConfig } from 'vite';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [], // If you're using React, add: plugins: [react()]
//   server: {
//     host: true,
//     port: 5173,
//     strictPort: true,
//     hmr: {
//       protocol: 'ws',
//       clientPort: 5173,
//     },
//   },
//   define: {
//     global: 'window',
//   },
//   build: {
//     outDir: 'dist', // ✅ Ensures Vercel sees the correct output folder
//   },
// });















// import { defineConfig } from 'vite';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [], // Removed the @vitejs/plugin-react plugin
//   server: {
//     host: true, // ✅ Allows access from network
//     port: 5173, // ✅ Ensures correct port usage
//     strictPort: true, // ✅ Prevents automatic port switching
//     hmr: {
//       protocol: 'ws', // ✅ WebSocket protocol fix
//       clientPort: 5173, // ✅ Ensures WebSocket works on the correct port
//     },
//   },
//   define: {
//     global: 'window', // ✅ Define global as window
//   },
//   build: {
//     chunkSizeWarningLimit: 1000 // ✅ Increased chunk size limit to 1000KB (1MB)
//   }
// });
