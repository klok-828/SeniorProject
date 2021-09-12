import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const { width, height } = Dimensions.get("window");

function AppButton({ title, onPress, color = "primary" }) {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    console.log("loading");
  }

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
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
    width: width - width * 0.3,
  },
});

export default AppButton;
