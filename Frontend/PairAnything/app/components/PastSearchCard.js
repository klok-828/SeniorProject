import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const { width, height } = Dimensions.get("window");
let w = width - width * 0.6;
let h = height - height * 0.8;

function PastSearchCard({ onPress, title, desc, image }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View width={w} height={h} style={styles.card}>
        <Image source={image} resizeMode={"contain"} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: height - height * 0.99,
            }}
          >
            <Text
              style={{
                color: colors.on_surface,
                fontFamily: "Montserrat_700Bold",
                fontSize: 10,
                flexShrink: 1,
              }}
            >
              {title}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="glass-wine" color={colors.primary} />
            <Text
              style={{
                color: colors.primary,
                fontFamily: "Montserrat_400Regular",
                fontSize: 10,
              }}
              numberOfLines={2}
            >
              {desc}
            </Text>
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
    overflow: "hidden",
    elevation: 2,
    shadowColor: colors.medium_gray,
    shadowRadius: 20,
  },
  detailsContainer: {
    paddingTop: height - height * 0.98,
    paddingHorizontal: width - width * 0.98,
  },
  image: {
    width: w,
    height: h - h * 0.5,
    alignSelf: "center",
    backgroundColor: colors.on_surface,
  },
});

export default PastSearchCard;
