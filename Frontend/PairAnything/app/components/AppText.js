import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

//Consistent text across app
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    color: colors.on_surface,
  },
});

export default AppText;
