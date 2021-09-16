import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
} from "react-native";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

function recommendedWineCard({ image, price, logo, name, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={styles.card}
        width={width - width * 0.6}
        height={height - height * 0.74}
      >
        <View style={styles.wineAndCard}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={{ marginTop: height - height * 0.82 }}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.wineInfo}>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logo} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: "white",
    margin: 8,
    elevation: 15,
    shadowColor: colors.dark_gray,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  logoContainer: {
    width: width - width * 0.9,
    height: height - height * 0.97,
    marginLeft: width - width * 0.86,
  },
  name: {
    color: colors.on_surface,
    fontFamily: "Montserrat_700Bold",
    fontSize: 12,
    paddingHorizontal: width - width * 0.96,
    paddingTop: height - height * 0.98,
  },
  price: {
    color: colors.primary,
    fontFamily: "Montserrat_500Medium",
    fontSize: 12,
  },
  wineAndCard: {
    width: width - width * 0.9,
    height: height - height * 0.01,
    marginTop: -(height - height * 0.6),
    marginLeft: width - width * 0.85,
    position: "absolute",
  },
  wineInfo: {
    flexDirection: "row",
    marginHorizontal: width - width * 0.96,
    marginTop: height - height * 0.99,
  },
});

export default recommendedWineCard;
