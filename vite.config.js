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
// });




import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './', // ✅ Vercel वर dist मधून योग्य रितीने serve होण्यासाठी
  plugins: [],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      clientPort: 5173,
    },
  },
  define: {
    global: 'window',
  },
});





// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: './', // For Vercel or static hosting
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
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
