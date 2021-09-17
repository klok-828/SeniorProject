import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

function AppButton({ title, onPress, color = "primary", style }) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.on_primary,
          fontFamily: "Montserrat_800ExtraBold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: height - height * 0.98,
    width: width - width * 0.2,
  },
});

export default AppButton;
