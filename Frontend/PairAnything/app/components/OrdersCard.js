import React from "react";
import { 
    StyleSheet, 
    View,
    Text,
    Dimensions,
} from "react-native";
import colors from "../config/colors";
import Svg, { Path }from "react-native-svg";
import SeeAllButton from "./SeeAllButton";
import Orders from "./Orders";

const { width, height } = Dimensions.get("window");

function OrdersCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.title}>ORDERS</Text>
                        <SeeAllButton text='SEE ALL'/>
                 </View>
                <Orders style={styles.orders} />
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
    },
    
    orders: {
        marginLeft: 50,
        paddingLeft: 20,
        marginHorizontal: 20,
        flexDirection: "row",
    }
});

export default OrdersCard;