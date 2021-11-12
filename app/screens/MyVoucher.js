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

import routes from "../navigation/routes";
import AppButton from "../components/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function MyVoucher({ navigation }) {
  return (
    //Header: My Voucher
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
            borderWidth: 1,
            borderRadius: 25,
            //marginRight: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text style={styles.title}>QR Code</Text>
        </View>

        <View //Details
          style={{
            backgroundColor: colors.white,
            flex: 0.6,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            borderWidth: 1,
            borderRadius: 25,
            //marginRight: 10,
            alignItems: "center",
            justifyContent: "center",
            //marginBottom: 20,
          }}
        >
          <Text style={styles.title}>Details</Text>
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
            title="USE"
            onPress={() =>
              Alert.alert("Thank You!", "Voucher has been applied successfully")
            }
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

  title: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },
});
export default MyVoucher;
