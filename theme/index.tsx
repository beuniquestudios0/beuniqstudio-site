import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

// Configs
import { Typography } from "./typography";
import { ColorPallete } from "./colors";

const OverrideTheme = {
  ...chakraTheme,
  ...Typography,
  ...ColorPallete,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
      body: {
        color: "#1d3557",
        bg: "#fffffe",
      },
    },
  },
};

const customTheme = extendTheme(OverrideTheme);
export default customTheme;
