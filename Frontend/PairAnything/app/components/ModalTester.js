import React, { useState } from "react";
import { Button, Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Svg, { Path }from "react-native-svg";
import Modal from "react-native-modal";
import BackButton from "./BackButton";
import colors from "../config/colors";
import AppButton from "./AppButton";

const { width, height } = Dimensions.get("window");

function ModalTester({image, logo, name, status}) {

    
    const [isModalVisible, setModalVisible] = useState(false);
    
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />
  
        <Modal isVisible={isModalVisible}>
          <View style={styles.content}>
            <View>
              <Image 
                source={image}
                style={styles.image}
              />
              <Image
                  source={logo}
                  style={styles.logo}
              />
              <Text style={styles.wineName}>{name}</Text>
              <Text style={styles.wineDeliverStatus}>{status}</Text>
            </View>
            <Text style={styles.ratingText}>HOW WAS THE WINE?</Text>
            <AppButton style={styles.button} title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    content: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    image: {
      width: 20,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ rotate: "-10deg" }],
      marginRight: 20
    },

    wineName: {
      fontFamily: "Montserrat_700Bold",
      fontSize: 12,
      color: colors.primary,
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

    ratingText: {
      fontFamily:"Montserrat_600SemiBold",
      fontSize: 10,
      color: colors.dark_gray,
    },

    button: {
      backgroundColor: colors.primary,
        borderRadius: 0,
        alignItems: "center",
        padding: height - height * 0.98,
        width: 80,
      
  }
  });
  export default ModalTester;