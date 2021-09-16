import React from "react";
import { View, StyleSheet, Dimensions, Image, FlatList } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import BackButton from "../components/BackButton";
import WineRating from "../components/WineRating";
import RecommendedWineCard from "../components/RecommendedWineCard";
import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

//for wine rating
let wineResult = {
  varietal: "Sauvignon Blanc",
  type: "WHITE WINE",
  dryRating: 2,
  lightRating: 2,
  image: require("../assets/sauvignonBlanc.jpeg"),
};

//temp info for recommended cards
let recommendedWines = [
  {
    name: "Jana Winery Sauvignon Blanc",
    price: "$28.00",
    image: require("../assets/wines/SauvignonBlanc/scottHarveyBlanc.png"),
    logo: require("../assets/logos/scottHarvey.png"),
    id: 1,
  },
  {
    name: "Sauvignon Blanc",
    price: "$27.00",
    image: require("../assets/wines/SauvignonBlanc/ironHubBlanc.png"),
    logo: require("../assets/logos/ironHub.png"),
    id: 2,
  },
  {
    name: "Sauvignon Blanc",
    price: "$22.80",
    image: require("../assets/wines/SauvignonBlanc/familyBlanc.png"),
    logo: require("../assets/logos/bakerFamilyWines.png"),
    id: 3,
  },
];

function handleCardPressed(name) {
  console.log(name);
}

function WinePairingResultScreen({ searchedFood = "chicken marsala" }) {
  return (
    <Screen>
      <AppText style={styles.whatPairs}>HERE'S WHAT PAIRS WITH</AppText>
      <View style={styles.header}>
        <BackButton />
        <AppText style={styles.text}>{searchedFood}</AppText>
      </View>
      <View style={styles.line} />
      <View style={styles.wine}>
        <Image
          source={wineResult.image}
          style={styles.image}
          resizeMode={"center"}
        />
        <View style={styles.wineType}>
          <AppText style={styles.wineResultType}>{wineResult.type}</AppText>
          <AppText style={styles.wineVarietal}>{wineResult.varietal}</AppText>
          <View style={{ paddingTop: height - height * 0.98 }}>
            <WineRating start="Dry" end="Sweet" rating={wineResult.dryRating} />
            <WineRating
              start="Light"
              end="Bold"
              rating={wineResult.lightRating}
            />
          </View>
        </View>
      </View>
      <View>
        <AppText style={styles.available}>AVAILABLE AT:</AppText>
      </View>
      <View style={styles.list}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={recommendedWines}
          keyExtractor={(wineCard) => wineCard.id.toString()}
          renderItem={({ item }) => (
            <RecommendedWineCard
              name={item.name}
              image={item.image}
              price={item.price}
              logo={item.logo}
              onPress={handleCardPressed(item.name)}
            />
          )}
        />
        <View style={{ alignSelf: "center" }}>
          <AppButton title="SEE ALL" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  available: {
    marginVertical: height - height * 0.98,
    marginHorizontal: width - width * 0.95,
    color: colors.primary,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 10,
  },
  header: {
    flexDirection: "row",
    marginLeft: width - width * 0.95,
    paddingTop: height - height * 0.99,
  },
  image: {
    marginLeft: width - width * 0.98,
    width: width - width * 0.6,
    height: height - height * 0.7,
    transform: [{ rotate: "-10deg" }],
  },
  line: {
    height: 1,
    backgroundColor: colors.light_grey,
    marginTop: height - height * 0.98,
    marginLeft: width - width * 0.95,
    marginRight: width - width * 0.95,
  },
  list: {
    paddingTop: height - height * 0.98,
    paddingHorizontal: width - width * 0.92,
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
  wine: {
    flexDirection: "row",
  },
  wineType: {
    marginTop: height - height * 0.92,
  },
  wineResultType: {
    fontSize: 10,
    color: colors.dark_gray,
    fontFamily: "Montserrat_600SemiBold",
    paddingLeft: width - width * 0.99,
  },
  wineVarietal: {
    color: colors.primary,
    fontFamily: "Montserrat_700Bold",
    paddingLeft: width - width * 0.99,
  },
});

export default WinePairingResultScreen;
