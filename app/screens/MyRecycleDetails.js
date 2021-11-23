import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from "react-native";

import AppButton from "../components/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import colors from "../config/colors";
function MyRecycleDetails(props) {
  return (
    //Header: My Recycle Details
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      {/* Content */}
      <View
        style={{
          backgroundColor: colors.pink,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View //QR Code
          style={{
            backgroundColor: colors.white,
            flex: 0.3,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            //borderWidth: 1,
            borderRadius: 25,
            //marginRight: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/QRCode.png")}
          />
        </View>

        <View //Details
          style={{
            backgroundColor: colors.white,
            flex: 0.6,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            //borderWidth: 1,
            borderRadius: 25,
            //marginRight: 10,
            //marginTop: 20,
            //paddingTop: 20,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            //marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <AppText style={styles.category}>Name</AppText>
          <AppText style={styles.title}>Noor Aleeya Sabreena</AppText>
          <AppText style={styles.category}>Recycle Item</AppText>
          <AppText style={styles.title}>
            2x MiliandRose Liquid Matte Container
          </AppText>
          <AppText style={styles.category}>Date</AppText>
          <AppText style={styles.title}>Saturday, 25-12-2021</AppText>
          <AppText style={styles.category}>Venue</AppText>
          <AppText style={styles.title}>MiliandRose Central i-City</AppText>
          <AppText style={styles.category}>RC Points To Be Earned</AppText>
          <AppText style={styles.title}>20 Points</AppText>
          <AppText style={styles.category}>Transaction Number</AppText>
          <AppText style={styles.title}>#25299</AppText>
        </View>

        <View //Button : SAVE AS IMAGE
          style={{
            width: "90%",
            //height: 100,
            flex: 0.15,
            //marginLeft: 60,
            //bottom: 0,
          }}
        >
          <AppButton
            title="SAVE AS IMAGE"
            onPress={() => Alert.alert("Success", "Image Saved Successfully!")}
          ></AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  image: {
    marginVertical: -20,
    marginHorizontal: 60,
    width: 195,
    height: 195,
    justifyContent: "center",
    alignItems: "center",
  },

  serviceTitle: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },

  tnc: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },

  category: {
    color: colors.grey,
    fontSize: 14,
    //fontWeight: "bold",
    marginHorizontal: 25,
    //marginVertical: 5,
    marginTop: 20,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },

  title: {
    color: colors.grey,
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 25,
    // marginVertical: 3,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },
});
export default MyRecycleDetails;
