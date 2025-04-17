// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: "Snowgoose Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/troyharris/snowgoose",
        },
      ],
    }),
  ],
});
