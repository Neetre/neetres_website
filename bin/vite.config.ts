import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 11000, // Change to your desired port
    host: '0.0.0.0', // Set to '0.0.0.0' to expose to external networks
  },
});