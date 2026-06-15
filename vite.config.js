// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// // vite.config.js
// export default {
//   css: {
//     preprocessorOptions: {
//       scss: {
//         quietDeps: true, 
//         silenceDeprecations: ['import', 'if-function', 'global-builtin'],
//       },
//     },
//   },
// };

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Isse Bootstrap ki purani Sass warnings hide ho jayengi
        quietDeps: true,
        silenceDeprecations: ['import', 'if-function', 'global-builtin'],
      },
    },
  },
})