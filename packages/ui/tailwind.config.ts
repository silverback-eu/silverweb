import type { Config } from "tailwindcss";
import sharedConfig from "@silverweb/tailwind-config/ui-tailwind.config.ts";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
