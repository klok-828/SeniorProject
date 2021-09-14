import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";

const { width, height } = Dimensions.get("window");
let w = width - width * 0.6;
let h = height - height * 0.8;

function ExploreCard({ onPress, name, title, desc, image }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View width={w} height={h} style={styles.card}>
        <Image source={image} resizeMode={"contain"} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text
            style={{
              color: colors.dark_gray,
              fontFamily: "Montserrat_700Bold",
              fontSize: 8,
            }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <View style={{ paddingBottom: 5 }}>
            <Text
              style={{
                color: colors.on_surface,
                fontFamily: "Montserrat_700Bold",
                fontSize: 11,
              }}
              numberOfLines={2}
            >
              {title}
            </Text>
          </View>
          <Text
            style={{
              color: colors.dark_gray,
              fontFamily: "Montserrat_400Regular",
              fontSize: 10,
            }}
            numberOfLines={2}
          >
            {desc}
          </Text>
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
    overflow: "hidden",
    elevation: 2,
    shadowColor: colors.medium_gray,
    shadowRadius: 20,
  },
  detailsContainer: {
    padding: width - width * 0.97,
  },
  image: {
    width: w,
    height: h - h * 0.5,
    alignSelf: "center",
    backgroundColor: colors.on_surface,
  },
});

export default ExploreCard;
