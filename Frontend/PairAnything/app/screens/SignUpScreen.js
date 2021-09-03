import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Logo from "../components/Logo";
import Screen from "../components/Screen";
import colors from "../config/colors";

function SignUpScreen(props) {
  //useState() hook saves the state of a variable.
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Logo />
      <AppText style={styles.sign_up}>Sign Up</AppText>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      {/* When button is pressed, email and password is printed to the console for testing purposes. Will be changed later*/}
      <AppButton title="Sign Up" onPress={() => console.log(email, password)} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <AppText>Already have an account?</AppText>
        <AppText style={{ color: colors.primary }}> Sign In</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", width: "100%", padding: 15 },
  sign_up: { fontSize: 40, padding: 15, fontWeight: "500" },
});

export default SignUpScreen;
