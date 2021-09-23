import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import Svg, { Path }from "react-native-svg";

const SeeAllButton = props => {
    const content = (
        <View style={[styles.button, {flexDirection: "row"}]}>
            <Text style={styles.text}>{props.text}</Text>
            <Svg width="5" height="13" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M1 8L4 4.5L1 1" stroke="#951901" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>        


        </View>
    )

    return<TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        
    },

    text: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 10,
        color: colors.primary
    }

});

export default SeeAllButton;