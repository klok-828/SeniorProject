import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

function wineRating({ start, end, rating }) {
  return (
    <View style={{ paddingVertical: 8 }}>
      <View style={{ flexDirection: "row" }}>
        {rating >= 1 && rating <= 2 ? (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.primary,
            }}
          />
        ) : (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.light_grey,
            }}
          />
        )}
        {rating == 2 ? (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.primary,
            }}
          />
        ) : (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.light_grey,
            }}
          />
        )}
        {rating == 3 ? (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.primary,
            }}
          />
        ) : (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.light_grey,
            }}
          />
        )}
        {rating == 4 ? (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.primary,
            }}
          />
        ) : (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.light_grey,
            }}
          />
        )}
        {rating >= 4 ? (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.primary,
            }}
          />
        ) : (
          <View
            style={{
              height: 3,
              width: width - width * 0.92,
              marginLeft: 5,
              backgroundColor: colors.light_grey,
            }}
          />
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        {rating <= 3 ? (
          <Text
            style={{
              marginLeft: 5,
              fontFamily: "Montserrat_700Bold",
              fontSize: 12,
              color: colors.primary,
            }}
          >
            {start}
          </Text>
        ) : (
          <Text
            style={{
              marginLeft: 5,
              fontFamily: "Montserrat_700Bold",
              fontSize: 12,
              color: colors.medium_gray,
            }}
          >
            {start}
          </Text>
        )}
        {rating >= 3 ? (
          <Text
            style={{
              marginLeft: width - width * 0.69,
              fontFamily: "Montserrat_700Bold",
              fontSize: 12,
              color: colors.primary,
            }}
          >
            {end}
          </Text>
        ) : (
          <Text
            style={{
              marginLeft: width - width * 0.69,
              fontFamily: "Montserrat_700Bold",
              fontSize: 12,
              color: colors.medium_gray,
            }}
          >
            {end}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 3,
    width: width - width * 0.92,
    marginLeft: 5,
    backgroundColor: colors.light_grey,
  },
});

export default wineRating;
