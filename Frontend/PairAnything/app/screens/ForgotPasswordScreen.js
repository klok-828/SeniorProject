import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Screen from "../components/Screen";
import Logo from "../components/Logo";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { ArrowLeft } from "react-native-feather";
import colors from "../config/colors";
import { emailValidator } from "../helpers/emailValidator";

function ForgotPasswordScreen(props) {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState({ value: false });
  const [emailResult, setEmailResult] = useState();

  function handleSubmit(email) {
    const emailResult = emailValidator(email);
    //email and password validation
    if (emailResult) {
      //User email is not valid
      setEmailError({ value: true });
      setEmailResult(emailResult);
      console.log(emailResult);
    } else {
      setEmailError({ value: false });
      console.log(email);
    }
  }

  return (
    <Screen style={styles.container}>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => console.log("arrow pressed.")}
      >
        <ArrowLeft stroke={colors.on_surface} />
      </TouchableOpacity>
      <Logo />
      <AppText style={styles.forgot}>Forgot Password</AppText>
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
      <AppButton
        title="Reset Password"
        onPress={() => handleSubmit(email.value)}
      />
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
  forgot: {
    fontSize: 40,
    padding: 15,
    fontWeight: "500",
  },
});

export default ForgotPasswordScreen;
