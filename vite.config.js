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


// vite.config.js

// import { defineConfig } from 'vite';

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






// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 This line is important
});
