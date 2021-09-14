import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

const { width, height } = Dimensions.get("window");

//Reusable input field
function AppTextInput({ icon, ...Props }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium_gray}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium_gray}
        style={defaultStyles.text}
        {...Props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light_grey,
    borderRadius: 5,
    width: width - width * 0.2,
    padding: 15,
    marginVertical: 7,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    paddingTop: 1,
  },
});

export default AppTextInput;
