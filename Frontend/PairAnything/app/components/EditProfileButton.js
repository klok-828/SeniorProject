import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import Svg, { Path }from "react-native-svg";

const editProfileButton = props => {
    const content = (
        <View style={[styles.button, {flexDirection: "row"}]}>
            <Text style={styles.text}>{props.text}</Text>
            <Svg width="7" height="13" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M6.73941 1.44118L5.54065 0.238089C5.38419 0.0905992 5.17918 0.00597135 4.9646 0.000304179C4.75002 -0.00536299 4.54086 0.068326 4.37689 0.207354L0.439344 4.15912C0.297927 4.30224 0.209874 4.48984 0.189966 4.69041L0.00183881 6.52139C-0.00405483 6.5857 0.00426011 6.65053 0.0261909 6.71124C0.0481216 6.77196 0.0831281 6.82708 0.128715 6.87266C0.169596 6.91335 0.218078 6.94555 0.271383 6.9674C0.324687 6.98925 0.381765 7.00033 0.439344 6.99999H0.478719L2.30311 6.83314C2.50297 6.81316 2.68988 6.72479 2.8325 6.58286L6.77004 2.6311C6.92287 2.46906 7.00546 2.25283 6.99972 2.02979C6.99398 1.80675 6.90037 1.59508 6.73941 1.44118ZM2.22436 5.95497L0.911849 6.07791L1.02998 4.76066L3.50188 2.31057L4.68314 3.4961L2.22436 5.95497ZM5.2519 2.90772L4.07938 1.73098L4.93252 0.852808L6.12691 2.05151L5.2519 2.90772Z" fill="#7D7D7D"/>
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
        color: colors.dark_gray
    }

});

export default editProfileButton;