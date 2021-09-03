import React from "react";
import { Image, View, StyleSheet } from "react-native";

//Component for styling the Pair Anything logo
function Logo() {
  return (
    <View>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
}

export default Logo;
