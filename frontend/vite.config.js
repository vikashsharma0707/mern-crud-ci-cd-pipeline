// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })


// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'   // or whatever plugins you use

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,          // ← this is the key line   (equivalent to 0.0.0.0)
//     port: 5173,
//   },
// })

import { defineConfig } from 'vite'  // ← ye line add karo
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})