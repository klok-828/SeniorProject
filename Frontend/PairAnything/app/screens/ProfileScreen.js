import React from "react";
import {
    Text, 
    View,
    StyleSheet,
    Dimensions} from "react-native"
import Screen from "../components/Screen";
import BackButton from "../components/BackButton";
import ProfileDetailCard from "../components/ProfileDetailCard";
import FlavorProfileCard from "../components/FlavorProfileCard";
import OrdersCard from "../components/OrdersCard";
import { User } from "react-native-feather";
import colors from "../config/colors";
import AppButton from "../components/AppButton";


let user = { name: "Jane" };
const { width, height } = Dimensions.get("window");

function ProfileScreen(props) {
    return (
        <Screen>
            <BackButton />
            <Text style={styles.greeting}>{user.name}</Text>
            <AppButton style={styles.button} title="Take the Taste Quiz to get personalized wines! >"/>
            <ProfileDetailCard />
            <FlavorProfileCard />
            <OrdersCard />

        </Screen>
    )
}

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
        fontFamily: "Montserrat_800ExtraBold",
        color: colors.on_surface,
        paddingRight: width - width * 0.54,
        paddingLeft: 10
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: 0,
        alignItems: "center",
        padding: height - height * 0.98,
        width: width,
    }
});
export default ProfileScreen;