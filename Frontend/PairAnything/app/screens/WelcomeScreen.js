import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Logo from "../components/Logo";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

//Welcome Screen that user sees
function WelcomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Logo />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.discover}>Discover your next favorite wine.</Text>
      <View style={styles.getStartedButton}>
        <AppButton title={"GET STARTED"} />
      </View>
      <View style={styles.or}>
        <View style={styles.line} />
        <View>
          <Text style={styles.orSeparator}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={{ paddingTop: height - height * 0.99 }}>
        <MaterialCommunityIcons
          name="facebook"
          color={colors.facebook_blue}
          size={30}
        />
      </View>
      <Text style={styles.haveAccount}>ALREADY HAVE AN ACCOUNT?</Text>
      <Text style={styles.signIn}>SIGN-IN</Text>
      <Text style={styles.continue}>CONTINUE AS GUEST</Text>
    </Screen>
  );
}

//styles ordered alphabetically
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: width,
  },
  continue: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 10,
    color: colors.dark_gray,
    textDecorationLine: "underline",
    paddingTop: height - height * 0.95,
    paddingBottom: height - height * 0.1,
  },
  discover: {
    fontFamily: "Montserrat_400Regular",
    color: colors.dark_gray,
    fontSize: 16,
  },
  getStartedButton: {
    width: "100%",
    alignItems: "center",
    paddingTop: height - height * 0.78,
  },
  haveAccount: {
    fontFamily: "Montserrat_400Regular",
    color: colors.primary,
    fontSize: 10,
    paddingTop: height - height * 0.95,
  },
  line: {
    height: 1,
    width: width - width * 0.67,
    backgroundColor: colors.dark_gray,
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: height - height * 0.97,
  },
  orSeparator: {
    width: width - width * 0.88,
    textAlign: "center",
    color: colors.dark_gray,
    fontFamily: "Montserrat_300Light",
  },
  welcome: {
    fontSize: 50,
    fontFamily: "Montserrat_800ExtraBold",
    color: colors.on_surface,
    paddingTop: height - height * 0.99,
  },
  signIn: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 10,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
