import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@shared-assets': path.resolve(__dirname, './src/assets/shared'),
            '@widgets': path.resolve(__dirname, './src/widgets')
        }
    }
})
