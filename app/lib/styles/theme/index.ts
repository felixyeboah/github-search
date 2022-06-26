import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts,
  colors,
});

export default customTheme;
