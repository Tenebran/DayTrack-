import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteEnvCompatible from 'vite-plugin-env-compatible';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    {
      ...svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      enforce: 'pre', 
    },
    react(),
    viteEnvCompatible(),
  ],
  base: mode === 'production' ? '/DayTrack-/' : '/',
  define: {
    'process.env': process.env,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  build: {
    outDir: 'dist',
  },
}));
