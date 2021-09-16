import React, { useState } from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import useFonts from "./app/hooks/useFonts";

import Screen from "./app/components/Screen";
import PairingScreen from "./app/screens/PairingScreen";

import SignUpScreen from "./app/screens/SignUpScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ExploreCard from "./app/components/ExploreCard";
import LoginScreen from "./app/screens/LoginScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";
import PairingSearchScreen from "./app/screens/PairingSearchScreen";
import WinePairingResultScreen from "./app/screens/WinePairingResultScreen";
import WineRating from "./app/components/WineRating";
import RecommendedWineCard from "./app/components/RecommendedWineCard";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  //load fonts
  const FontLoading = async () => {
    await useFonts(); //Fonts loading
  };

  //If the fonts or other data is loading, display the splash screen
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={FontLoading}
        onFinish={() => SetIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <WinePairingResultScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
