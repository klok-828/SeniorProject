import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import Screen from "../components/Screen";
import colors from "../config/colors";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

function WelcomeScreen(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <Screen style={styles.container}>
      <Logo />
      <Text
        style={{
          fontSize: 50,
          fontFamily: "Montserrat_800ExtraBold",
          color: colors.on_surface,
          paddingTop: height - height * 0.99,
        }}
      >
        Welcome!
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat_400Regular",
          color: colors.dark_gray,
          fontSize: 16,
        }}
      >
        Discover your next favorite wine.
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          paddingTop: height - height * 0.78,
        }}
      >
        <AppButton title={"GET STARTED"} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: height - height * 0.97,
        }}
      >
        <View
          style={{
            height: 1,
            width: width - width * 0.72,
            backgroundColor: colors.dark_gray,
          }}
        />
        <View>
          <Text
            style={{
              width: width - width * 0.88,
              textAlign: "center",
              color: colors.dark_gray,
              fontFamily: "Montserrat_300Light",
            }}
          >
            OR
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.dark_gray,
            width: width - width * 0.72,
          }}
        />
      </View>
      <View style={{ paddingTop: height - height * 0.99 }}>
        <MaterialCommunityIcons name="facebook" color="#1877F2" size={30} />
      </View>
      <Text
        style={{
          fontFamily: "Montserrat_400Regular",
          color: colors.primary,
          fontSize: 10,
          paddingTop: height - height * 0.95,
        }}
      >
        ALREADY HAVE AN ACCOUNT?
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat_800ExtraBold",
          fontSize: 10,
          color: colors.primary,
          textDecorationLine: "underline",
        }}
      >
        SIGN-IN
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat_800ExtraBold",
          fontSize: 10,
          color: colors.dark_gray,
          textDecorationLine: "underline",
          paddingTop: height - height * 0.95,
          paddingBottom: height - height * 0.1,
        }}
      >
        CONTINUE AS GUEST
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: width,
  },
  welcome: {
    fontSize: 30,
  },
});

export default WelcomeScreen;
