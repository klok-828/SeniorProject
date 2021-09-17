import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  FlatList,
} from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import BackButton from "../components/BackButton";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import PastSearchCard from "../components/PastSearchCard";

const { width, height } = Dimensions.get("window");

let pastSearches = [
  {
    name: "Heirloom Mushroom Brie Burger",
    wine: "PINOT NOIR",
    image: require("../assets/dishes/brieburger.jpg"),
    id: 1,
  },
  {
    name: "Heirloom Mushroom Brie Burger",
    wine: "PINOT NOIR",
    image: require("../assets/dishes/brieburger.jpg"),
    id: 2,
  },
  {
    name: "Heirloom Mushroom Brie Burger",
    wine: "PINOT NOIR",
    image: require("../assets/dishes/brieburger.jpg"),
    id: 3,
  },
];

let dishResult = {
  name: "Ahi Poke with Quinoa and Heriloom Tomatoes",
  cooktime: "1 HR  20 MIN",
  image: require("../assets/dishes/ahiPoke.jpg"),
  link: "https://www.jordanwinery.com/recipes/ahi-poke-with-quinoa-and-heirloom-tomatoes/",
};

function FoodPairingResultScreen({ searchedWine = "chardonnay" }) {
  function handleCardPressed(wineName) {
    console.log(wineName);
  }

  return (
    <Screen>
      <AppText style={styles.whatPairs}>HERE'S WHAT PAIRS WITH</AppText>
      <View style={styles.header}>
        <BackButton />
        <AppText style={styles.text}>{searchedWine}</AppText>
      </View>
      <View style={styles.line} />
      <View style={styles.background} />
      <View style={styles.dish}>
        <View style={styles.imageContainer}>
          <Image source={dishResult.image} style={styles.image} />
        </View>
        <View style={styles.dishInfo}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name={"clock-outline"}
                color={colors.dark_gray}
              />
              <Text style={styles.cookTime}>{dishResult.cooktime}</Text>
            </View>
            <Text style={styles.dishName}>{dishResult.name}</Text>
            <View style={{ paddingTop: height - height * 0.98 }}>
              <AppButton title="View Recipe" style={styles.button} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pastSearches}>
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            color: colors.primary,
            fontSize: 10,
            paddingLeft: width - width * 0.97,
          }}
        >
          PAST SEARCHES
        </Text>
        <View style={styles.list}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={pastSearches}
            keyExtractor={(exploreCard) => exploreCard.id.toString()}
            renderItem={({ item }) => (
              <PastSearchCard
                image={item.image}
                title={item.name}
                desc={item.wine}
                onPress={handleCardPressed(item.name)}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FDF2DE",
    width: width - width * 0.59,
    height: height - height * 0.85,
    marginTop: height - height * 0.8,
    position: "absolute",
  },
  button: {
    width: width - width * 0.51,
    padding: height - height * 0.99,
    fontSize: 10,
  },
  cookTime: {
    color: colors.dark_gray,
    fontSize: 12,
    paddingLeft: width - width * 0.99,
  },
  dish: { flexDirection: "row" },
  dishName: {
    flexShrink: 1,
    fontFamily: "Montserrat_700Bold",
    color: colors.primary,
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    marginLeft: width - width * 0.95,
    paddingTop: height - height * 0.99,
  },
  dishInfo: {
    marginTop: height - height * 0.91,
    marginLeft: width - width * 0.97,
    height: height - height * 0.8,
    flexDirection: "row",
    width: width - width * 0.51,
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  imageContainer: {
    width: width - width * 0.55,
    height: height - height * 0.6,
  },
  line: {
    height: 1,
    backgroundColor: colors.light_grey,
    marginTop: height - height * 0.98,
    marginLeft: width - width * 0.95,
    marginRight: width - width * 0.95,
  },
  list: {
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    paddingTop: height - height * 0.98,
  },
  pastSearches: {
    marginHorizontal: width - width * 0.95,
  },
  text: {
    marginLeft: width - width * 0.97,
    width: width - width * 0.3,
    padding: 2,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  whatPairs: {
    fontSize: 10,
    color: colors.dark_gray,
    fontFamily: "Montserrat_700Bold",
    marginLeft: width - width * 0.85,
    paddingBottom: width - width * 0.99,
    paddingTop: height - height * 0.98,
  },
});

export default FoodPairingResultScreen;
