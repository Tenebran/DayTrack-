import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import viteEnvCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteEnvCompatible(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/img')],
      symbolId: 'icon-[name]',
    }),
  ],
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
});
