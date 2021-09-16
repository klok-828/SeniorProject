import React, { useState } from "react";
import Screen from "../components/Screen";

import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import BackButton from "../components/BackButton";

const { width, height } = Dimensions.get("window");

function PairingSearchScreen({ searchedItem = "chicken marsala" }) {
  const [search, setSearch] = useState(searchedItem);
  const [value, onChangeText] = useState(searchedItem);

  return (
    <Screen>
      <AppText style={styles.whatPairs}>WHAT PAIRS WELL WITH...</AppText>
      <View style={styles.textInput}>
        <BackButton />
        <TextInput
          style={styles.text}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          onSubmitEditing={() => {
            if (value) {
              setSearch(value);
            } else {
              setSearch(null);
            }
          }}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.results}>
        <View style={{ flexDirection: "row" }}>
          <AppText style={styles.food}>FOOD</AppText>
          <MaterialCommunityIcons name="pizza" color={colors.primary} />
        </View>
        {search !== "chardonnay" && (
          <TouchableWithoutFeedback onPress={() => console.log(search)}>
            <Text style={styles.list}>{search}</Text>
          </TouchableWithoutFeedback>
        )}
        <View
          style={{
            flexDirection: "row",
            paddingTop: height - height * 0.98,
            paddingBottom: height - height * 0.98,
          }}
        >
          <AppText style={styles.wine}>WINE</AppText>
          <MaterialCommunityIcons name="glass-wine" color={colors.primary} />
        </View>
        {search === "chardonnay" && (
          <TouchableWithoutFeedback onPress={() => console.log(search)}>
            <Text style={styles.list}>{search}</Text>
          </TouchableWithoutFeedback>
        )}
      </View>
      {search && (
        <TouchableWithoutFeedback
          onPress={console.log("food or wine not listed")}
        >
          <AppText style={styles.notListed}>
            THE FOOD OR WINE IM LOOKING FOR ISN'T LISTED
          </AppText>
        </TouchableWithoutFeedback>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  food: {
    color: colors.primary,
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 8,
    paddingRight: width - width * 0.98,
    paddingBottom: height - height * 0.98,
  },
  line: {
    height: 1,
    backgroundColor: colors.light_grey,
    marginTop: height - height * 0.98,
    marginLeft: width - width * 0.95,
    marginRight: width - width * 0.95,
  },
  list: {
    fontFamily: "Montserrat_400Regular",
    color: colors.dark_gray,
    fontSize: 16,
  },
  notListed: {
    paddingTop: height - height * 0.7,
    fontSize: 10,
    alignSelf: "center",
    fontFamily: "Montserrat_700Bold",
    color: colors.dark_gray,
  },
  text: {
    marginLeft: width - width * 0.97,
    width: width - width * 0.3,
    padding: 2,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  results: {
    marginTop: height - height * 0.97,
    marginLeft: width - width * 0.85,
  },
  textInput: { flexDirection: "row", marginLeft: width - width * 0.95 },
  whatPairs: {
    fontSize: 10,
    color: colors.dark_gray,
    fontFamily: "Montserrat_700Bold",
    marginLeft: width - width * 0.85,
    paddingBottom: width - width * 0.99,
    paddingTop: height - height * 0.98,
  },
  wine: {
    color: colors.primary,
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 8,
    paddingRight: width - width * 0.98,
  },
});

export default PairingSearchScreen;
