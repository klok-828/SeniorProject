import { Platform } from "react-native";

import colors from "./colors";

//Default styles for text and colors
export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
