import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Logo from "../components/Logo";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";

const { width, height } = Dimensions.get("window");
let deviceHeight = Dimensions.get("screen").height;
let windowHeight = Dimensions.get("window").height;
let bottomNavBarHeight = deviceHeight - windowHeight; //bottom navbar on the device

//Welcome Screen that user sees
function WelcomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Logo />
      <Text style={styles.welcome}>Welcome to</Text>
      <Text style={styles.pairAnything}> PairAnything </Text>
      <Text style={styles.discover}>Where food meets wine.</Text>
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
      <View
        style={{
          flexDirection: "row",
          paddingRight: width - width * 0.96,
        }}
      >
        <Icon
          name={"facebook"}
          iconColor={colors.medium_gray}
          backgroundColor={"white"}
          size={78}
        />
        <View
          style={{
            paddingTop:
              bottomNavBarHeight > 0
                ? height - height * 0.97
                : height - height * 0.98,
            paddingRight: width - width * 0.95,
          }}
        >
          <Icon
            name={"google"}
            iconColor={"white"}
            backgroundColor={colors.medium_gray}
            size={34}
          />
        </View>
        <View
          style={{
            paddingTop: bottomNavBarHeight
              ? height - height * 0.97
              : height - height * 0.98,
          }}
        >
          <Icon
            name={"apple"}
            iconColor={"white"}
            backgroundColor={colors.medium_gray}
            size={35}
          />
        </View>
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
    paddingTop:
      bottomNavBarHeight > 0 ? height - height * 0.85 : height - height * 0.77,
  },
  haveAccount: {
    fontFamily: "Montserrat_400Regular",
    color: colors.primary,
    fontSize: 10,
    paddingTop: height - height * 0.98,
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
    fontSize: 45,
    fontFamily: "Montserrat_800ExtraBold",
    color: colors.on_surface,
    paddingLeft: width - width * 0.97,
  },
  pairAnything: {
    fontSize: 45,
    fontFamily: "Montserrat_800ExtraBold",
    color: colors.on_surface,
    paddingLeft: width - width * 0.97,
  },
  signIn: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 10,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
