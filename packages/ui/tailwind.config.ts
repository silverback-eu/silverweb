import type { Config } from "tailwindcss";
import sharedConfig from "twconfig/tailwind.config";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

// eslint-disable-next-line import/no-default-export -- config file
export default config;
