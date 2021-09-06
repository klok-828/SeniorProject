import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

//Reusable input field
function AppTextInput({ ...Props }) {
  return (
    <View style={styles.container}>
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
    borderRadius: 25,
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});

export default AppTextInput;
