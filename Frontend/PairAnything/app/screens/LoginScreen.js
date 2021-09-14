import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import Screen from "../components/Screen";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

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
      <View
        style={{ paddingBottom: height - height * 0.97, alignItems: "center" }}
      >
        <AppText style={styles.signIn}>Sign-in</AppText>

        <AppText style={styles.input}>
          Please input your email and password to sign-in.
        </AppText>
      </View>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail({ value: text })}
        placeholder="Email"
        textContentType="emailAddress"
        icon="email-outline"
      />
      {emailError.value && (
        <AppText style={styles.result}>{emailResult}</AppText>
      )}
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword({ value: text })}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        icon="lock-outline"
      />
      {passwordError.value && (
        <AppText style={styles.result}>{passwordResult}</AppText>
      )}

      {/* When button is pressed, email and password is printed to the console for testing purposes. Will be changed later*/}
      <View style={{ paddingTop: height - height * 0.98 }}>
        <AppButton
          title="SIGN-IN"
          onPress={() => handleSubmit(email.value, password.value)}
          style={{ width: "100%" }}
        />
      </View>

      <View style={styles.or}>
        <View style={styles.line} />
        <View>
          <Text style={styles.orText}>OR</Text>
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

      <AppText style={styles.forgot}>FORGOT PASSWORD</AppText>
      <AppText style={styles.continue}>CONTINUE AS GUEST</AppText>
    </Screen>
  );
}

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
  forgot: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 10,
    paddingTop: height - height * 0.95,
    color: colors.primary,
    textDecorationLine: "underline",
  },
  input: {
    fontFamily: "Montserrat_400Regular",
    color: colors.dark_gray,
    fontSize: 10,
  },
  line: {
    height: 1,
    width: width - width * 0.67,
    backgroundColor: colors.dark_gray,
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: height - height * 0.95,
  },
  orText: {
    width: width - width * 0.88,
    textAlign: "center",
    color: colors.dark_gray,
    fontFamily: "Montserrat_300Light",
  },
  result: {
    color: colors.error,
    fontSize: 14,
    paddingBottom: 2,
  },
  signIn: {
    fontSize: 50,
    fontFamily: "Montserrat_800ExtraBold",
    color: colors.on_surface,
    paddingTop: height - height * 0.99,
    paddingBottom: height - height * 0.99,
  },
});

export default LoginScreen;
