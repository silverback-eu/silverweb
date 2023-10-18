import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "dark",
        brandTitle: "SilverBack Group",
        brandUrl: "https://silverback-group.eu",
        brandImage: "/storybook_logo.png",
        brandTarget: "_self",
        
    })
})