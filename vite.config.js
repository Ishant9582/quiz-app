export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'SOME_WARNING_CODE') return; // Ignore specific warning
        warn(warning);
      }
    }
  }
});
