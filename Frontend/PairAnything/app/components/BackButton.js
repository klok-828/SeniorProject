import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name="arrow-left"
        color={colors.dark_gray}
        size={30}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
