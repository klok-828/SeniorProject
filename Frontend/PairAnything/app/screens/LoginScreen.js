import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

function LoginScreen(props) {
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });
  const [emailError, setEmailError] = useState({ value: false });
  const [passwordError, setPasswordError] = useState({ value: false });
  const [emailResult, setEmailResult] = useState();
  const [passwordResult, setPasswordResult] = useState();

  function handleSubmit(email, password) {
    const emailResult = emailValidator(email);
    const passwordResult = passwordValidator(password);

    //email and password validation
    if (emailResult || passwordResult) {
      if (emailResult) {
        //User email is not valid
        setEmailError({ value: true });
        setEmailResult(emailResult);
        console.log(emailResult);
      }
      if (passwordResult) {
        setPasswordError({ value: true });
        setPasswordResult(passwordResult);
        console.log(passwordResult);
      }
    } else {
      setEmailError({ value: false });
      setPasswordError({ value: false });
      console.log(email, password);
    }
  }

  return (
    <Screen style={styles.container}>
      <Logo />
      <AppText style={styles.sign_in}>Login</AppText>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail({ value: text })}
        placeholder="Email"
        textContentType="emailAddress"
      />
      {emailError.value && (
        <AppText
          style={{ color: colors.error, fontSize: 14, paddingBottom: 5 }}
        >
          {emailResult}
        </AppText>
      )}
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword({ value: text })}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      {passwordError.value && (
        <AppText
          style={{ color: colors.error, fontSize: 14, paddingBottom: 5 }}
        >
          {passwordResult}
        </AppText>
      )}
      <AppText style={styles.forgot_password}>Forgot Password?</AppText>
      {/* When button is pressed, email and password is printed to the console for testing purposes. Will be changed later*/}
      <AppButton
        title="Login"
        onPress={() => handleSubmit(email.value, password.value)}
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <AppText>Don't have an account?</AppText>
        <AppText style={{ color: colors.primary }}> Sign Up</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  forgot_password: {
    color: colors.primary,
    fontSize: 14,
    width: "100%",
    textAlign: "right",
    paddingBottom: 10,
  },
  sign_in: { fontSize: 40, padding: 15, fontWeight: "500" },
});

export default LoginScreen;
