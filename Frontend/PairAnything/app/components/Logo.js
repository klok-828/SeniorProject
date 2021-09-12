import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";

let { width, height } = Dimensions.get("window");
console.log(height);

if (height <= 600) {
  height = height - height / 2;
}

//Component for styling the Pair Anything logo
function Logo() {
  return (
    <View style={{ paddingTop: height - height * 0.95 }}>
      <Image
        style={{
          width: width - width * 0.7,
          height: height - height * 0.8,
          resizeMode: "contain",
        }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
}

export default Logo;
