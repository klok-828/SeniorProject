import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import Svg, { Path }from "react-native-svg";
import ModalTester from "./ModalTester";
import Modal from "react-native-modal";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import BackButton from "../components/BackButton";
import AppButton from "../components/AppButton";
import { AlignCenter, AlignLeft } from "react-native-feather";

const { width, height } = Dimensions.get("window");


function Orders() {
    const [orders, setOrders] = useState([
        { 
            name: "Jana Winery Sauvignon Blanc",
            winesImage: require("../assets/wines/SauvignonBlanc/scottHarveyBlanc.png"),
            deliverStatus: "Delivered Yesterday",
            winnersLogo: require("../assets/logos/scottHarvey.png"),
        },
    
        { 
            name: "Iron Hub Rose",
            winesImage: require("../assets/wines/SauvignonBlanc/scottHarveyBlanc.png"),
            deliverStatus: "Arriving Sept 21",
            winnersLogo: require("../assets/logos/ironHub.png"),
        },
    ]);

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

  return (
      
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={toggleModal} />
  
            <Modal isVisible={isModalVisible}>
            <View style={styles.content}>
                <Text>Hello!</Text>
  
                <Button title="Hide modal" onPress={toggleModal} />
            </View>
        </Modal>
        </View>
        <FlatList
            data={orders}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <ModalTester img={item.winesImage} logo={item.winnersLogo} name={item.name} status={item.deliverStatus}/>
                    <View style={styles.box}>
                        <Image 
                            source={item.winesImage}
                            style={styles.image}
                        />
                    <View style={styles.desc}>
                        <View style={{flexDirection: "row"}}>
                            <Svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M0 0V0.531547H4.30769V1.06309H1.07692V1.59464H0V2.12619H3.76923V2.65774H1.07692V3.18928H0V3.72083H3.23077V4.25238H1.07692V4.78393H0V5.31547H2.69231V5.84702H1.07692V7.97321C1.07692 8.29214 1.29231 8.50476 1.61538 8.50476H2.15385C2.26154 7.60113 3.06923 6.86015 4.03846 6.86015C5.00769 6.86015 5.81538 7.54797 5.92308 8.50476H7.53846C7.86154 8.50476 8.07692 8.29214 8.07692 7.97321V0.531547C8.07692 0.212619 7.86154 0 7.53846 0H0ZM9.15385 2.12619C8.83077 2.12619 8.61539 2.33881 8.61539 2.65774V7.97321C8.61539 8.23898 8.83077 8.50476 9.15385 8.50476C9.26154 7.60113 10.0692 6.86015 11.0385 6.86015C12.0077 6.86015 12.8154 7.54797 12.9231 8.50476H13.4615C13.7846 8.50476 14 8.29214 14 7.97321V5.31547C14 4.83708 13.5622 4.25238 13.5622 4.25238L12.3846 2.65774C12.1154 2.33881 11.9538 2.12619 11.5769 2.12619H9.15385ZM10.2308 3.18928H11.5263C11.634 3.18928 11.7455 3.28921 11.7455 3.28921L12.8725 4.83389C12.9802 4.99336 13.0916 5.1592 13.0916 5.26551H10.2308V3.18928ZM4.03846 7.54159C3.70859 7.54271 3.39254 7.67253 3.15923 7.90275C2.92592 8.13296 2.79428 8.44489 2.793 8.77053C2.79414 9.09626 2.92572 9.40833 3.15904 9.63866C3.39237 9.86899 3.70849 9.99888 4.03846 10C4.36843 9.99888 4.68456 9.86899 4.91788 9.63866C5.15121 9.40833 5.28279 9.09626 5.28392 8.77053C5.28279 8.4448 5.15121 8.13273 4.91788 7.9024C4.68456 7.67208 4.36843 7.54218 4.03846 7.54106V7.54159ZM11.0385 7.54159C10.7086 7.54271 10.3925 7.67253 10.1592 7.90275C9.92592 8.13296 9.79428 8.44489 9.793 8.77053C9.79414 9.09626 9.92572 9.40833 10.159 9.63866C10.3924 9.86899 10.7085 9.99888 11.0385 10C11.3684 9.99888 11.6846 9.86899 11.9179 9.63866C12.1512 9.40833 12.2828 9.09626 12.2839 8.77053C12.2828 8.4448 12.1512 8.13273 11.9179 7.9024C11.6846 7.67208 11.3684 7.54218 11.0385 7.54106V7.54159Z" fill="#609918"/>
                            </Svg>
                            <Text style={styles.wineDeliverStatus}>{item.deliverStatus}</Text>
                        </View>

                        <Text style={styles.wineName}>{item.name}</Text>
                        <Image
                            source={item.winnersLogo}
                            style={styles.logo}
                        />
                    </View>
                </View>
                </TouchableOpacity>
            )}
        />
    </View>
  );
}


const styles = StyleSheet.create ({
    container: {
        
    },

    desc: {
        justifyContent: "space-around",
        alignSelf: "center",
    },

    box: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderBottomColor: colors.light_grey,
        borderBottomWidth: 1,
        
    },

    image: {
        width: 20,
        height: 100,
        transform: [{ rotate: "-10deg" }],
        marginRight: 20
    },

    wineName: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 12,
        color: colors.on_surface,
        marginVertical: 3
    },

    logo: {
        width: 58,
        height: 60
    },

    wineDeliverStatus: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 10,
        color: "#609918",
        paddingLeft: 5
    },
});

export default Orders;
