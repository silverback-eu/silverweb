import { defineConfig, type Options } from "tsup";
import reactUseClient from "esbuild-react18-useclient";

export default defineConfig((options: Options) => ({
  splitting: true,
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  esbuildPlugins: [reactUseClient],
  external: ["react"],
  ...options,
}));
