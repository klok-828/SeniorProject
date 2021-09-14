import React from "react";
import Screen from "../components/Screen";

import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ExploreCard from "../components/ExploreCard";

function handleCardPressed(title) {
  console.log(title);
}

let user = { name: "Jane" };

//explore card temporary data
let exploreCards = [
  {
    name: "TASTE QUIZ",
    title: "Not sure which wines to try next?",
    desc: "Take our quiz to find out!",
    id: 1,
    image: require("../assets/redWine.jpg"),
  },
  {
    name: "BLOG",
    title: "Breakfast Elevated",
    desc: "Put a savory twist on the tradtionally sweet...",
    id: 2,
    image: require("../assets/breakfast.jpeg"),
  },
  {
    name: "FEATURED WINE",
    title: "Dusty's Vineyard Syrah",
    desc: "The 2018 vintage is the ...",
    id: 3,
    image: require("../assets/wineBottle.jpg"),
  },
];
const { width, height } = Dimensions.get("window");

function PairingScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.userWelcome}>
          <Text style={styles.greeting}>Hi {user.name}!</Text>
          <View style={{ paddingTop: height - height * 0.99 }}>
            <MaterialCommunityIcons
              name="account-circle"
              color={colors.dark_gray}
              size={30}
            />
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.pairText}>What pairs well with</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.textInput} />
          <Text style={{ fontFamily: "Montserrat_800ExtraBold", fontSize: 30 }}>
            ?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: height - height * 0.98,
          }}
        >
          <Text style={styles.tap}>TAP TO TYPE A </Text>
          <Text style={styles.food}>FOOD </Text>
          <Text style={styles.or}>OR </Text>
          <Text style={styles.wine}>WINE </Text>
          <Text style={styles.pairing}>FOR A PAIRING</Text>
        </View>
      </View>
      {/* EXPLORE MODULE */}
      <View style={styles.explore}>
        <Text style={styles.exploreText}>Explore</Text>
        <View style={styles.list}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={exploreCards}
            keyExtractor={(exploreCard) => exploreCard.id.toString()}
            renderItem={({ item }) => (
              <ExploreCard
                image={item.image}
                name={item.name}
                title={item.title}
                desc={item.desc}
                onPress={handleCardPressed(item.title)}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: width - width * 0.93,
    paddingRight: width - width * 0.93,
  },
  userWelcome: {
    flexDirection: "row",
    paddingTop: height - height * 0.95,
    paddingBottom: height - height * 0.99,
  },
  explore: {
    backgroundColor: "white",
    marginTop: height - height * 0.8,
    height: "100%",
    borderRadius: 20,
    elevation: 15,
    shadowColor: colors.dark_gray,
    shadowOpacity: 0.1,
  },
  exploreText: {
    paddingTop: height - height * 0.98,
    paddingLeft: width - width * 0.93,
    fontFamily: "Montserrat_500Medium",
    color: colors.primary,
  },
  food: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 10,
    color: colors.primary,
  },
  greeting: {
    fontSize: 30,
    fontFamily: "Montserrat_800ExtraBold",
    color: colors.on_surface,
    paddingRight: width - width * 0.54,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light_grey,
  },
  list: {
    paddingHorizontal: width - width * 0.95,
    shadowOpacity: 0.1,
  },
  or: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    color: colors.primary,
  },
  pairText: {
    paddingTop: height - height * 0.84,
    color: colors.primary,
    fontSize: 15,
    fontFamily: "Montserrat_700Bold",
    paddingBottom: height - height * 0.99,
  },
  pairing: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    color: colors.primary,
  },
  tap: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    color: colors.primary,
  },
  textInput: {
    width: width - width * 0.3,
    fontFamily: "Montserrat_300Light",
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#C73C32",
  },
  wine: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 10,
    color: colors.primary,
  },
});

export default PairingScreen;
