import * as fs from "node:fs/promises";
import * as path from "node:path";
import { env } from "node:process";
import type { Options } from "tsup";
import { defineConfig } from "tsup";
import * as dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../../.env.local`,
});

const DIST_PATH = "./dist";

async function addDirectivesToChunkFiles(distPath = DIST_PATH): Promise<void> {
  try {
    const files = await fs.readdir(distPath);

    for (const file of files) {
      if (
        file.startsWith("chunk-") &&
        (file.endsWith(".mjs") || file.endsWith(".js"))
      ) {
        const filePath = path.join(distPath, file);

        // eslint-disable-next-line no-await-in-loop -- We need to wait for each file to be read
        const data = await fs.readFile(filePath, "utf8");

        const updatedContent = `'use client';\n${data}`;

        // eslint-disable-next-line no-await-in-loop -- We need to wait for each file to be written
        await fs.writeFile(filePath, updatedContent, "utf8");

        // eslint-disable-next-line no-console -- We need to log the result
        console.log(`Directive has been added to ${file}`);
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

export default defineConfig((options: Options) => ({
  clean: !options.watch,
  dts: true,
  entry: ["src/**/*.tsx"],
  external: ["react"],
  format: ["esm", "cjs"],
  async onSuccess() {
    await addDirectivesToChunkFiles();
  },
  outDir: DIST_PATH,
  sourcemap: true,
  splitting: true,
  target: "esnext",
  treeshake: true,
  esbuildOptions(esOptions) {
    esOptions.define = {
      "process.env": JSON.stringify(env),
    };
  },
  ...options,
}));
