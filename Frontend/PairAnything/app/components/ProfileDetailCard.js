import React from "react";
import { 
    StyleSheet, 
    View,
    Text,
} from "react-native";
import colors from "../config/colors";
import Svg, { Path }from "react-native-svg";
import EditProfileButton from "./EditProfileButton";
import { AlignRight } from "react-native-feather";

function ProfileDetailCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={{flexDirection: "row", display: "flex", justifyContent: "space-between"}}>
                    <Text style={styles.title}>MY DETAILS</Text>
                        <EditProfileButton text='EDIT'/>
                </View>

                <Text style={styles.subTitle}>NAME</Text>
                <Text style={styles.data}>Jane Doe </Text>
                <Text style={styles.subTitle}>BIRTHDAY</Text>
                <Text style={styles.data}>11/ 05/ 2021 </Text>
                <Text style={styles.subTitle}>SHIPPING ADDRESS</Text>
                <Text style={styles.data}>490 Alvarado Ave. Davis, CA, 95045 </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 10,
        fontFamily: "Montserrat_600SemiBold",
        color: colors.primary
    },

    subTitle: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 8,
        color: colors.dark_gray
    },

    data: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 12,
        color: colors.on_surface,
        marginVertical: 4
    },

    card: {
        borderRadius : 6,
        elevation:  3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginLeft: 27,
        marginRight: 27
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
});

export default ProfileDetailCard;