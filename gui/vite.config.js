import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
//	server: {
//		https: {
//			key: './cricket-stream-privateKey.key',
//			cert: './cricket-stream.crt',
//		}
//	},
  plugins: [react()],
})
