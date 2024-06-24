import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/

const port = Number(process.env.PORT) || 4000

export default defineConfig({
	base: "/",
	plugins: [react()],
	server: {
		port,
		strictPort: true,
		host: true,
		origin: `http://0.0.0.0:${port}`
	}
})
