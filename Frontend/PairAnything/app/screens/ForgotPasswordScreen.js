import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";

import Screen from "../components/Screen";
import Logo from "../components/Logo";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import { emailValidator } from "../helpers/emailValidator";
import BackButton from "../components/BackButton";

const { width, height } = Dimensions.get("window");

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
    <Screen>
      <View style={{ marginLeft: width - width * 0.98 }}>
        <BackButton />
      </View>
      <View style={styles.container}>
        <Logo />
        <AppText style={styles.forgot}>Forgot Password</AppText>
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
        <AppButton
          title="Reset Password"
          onPress={() => handleSubmit(email.value)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: width - width * 0.97,
  },
  forgot: {
    fontSize: 37,
    padding: height - height * 0.98,
    fontFamily: "Montserrat_800ExtraBold",
  },
  result: {
    color: colors.error,
    fontSize: 14,
    paddingBottom: 5,
  },
});

export default ForgotPasswordScreen;
