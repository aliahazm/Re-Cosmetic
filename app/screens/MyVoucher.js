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

import Unorderedlist from "react-native-unordered-list";
import routes from "../navigation/routes";
import AppButton from "../components/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
            flex: 0.45,
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
            flex: 0.415,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            //borderWidth: 1,
            borderRadius: 25,
            //marginRight: 10,
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
          <AppText style={styles.voucherTitle}>
            RC Voucher 30% Off, No Min Spend
          </AppText>
          <AppText style={styles.category}>Validity</AppText>
          <AppText style={styles.title}>Till 31 December 2021</AppText>
          <AppText style={styles.category}>Terms & Conditions</AppText>
          <Unorderedlist
            style={{
              marginLeft: 25,

              fontSize: 18,
              marginRight: -25,
            }}
            bulletUnicode={0x2022}
            color="#707070"
          >
            <AppText style={styles.title}>
              Offer only valid in RC Vouchers outlet
            </AppText>
          </Unorderedlist>
          <Unorderedlist
            style={{
              marginLeft: 25,

              fontSize: 18,
              marginRight: -25,
            }}
            bulletUnicode={0x2022}
            color="#707070"
          >
            <AppText style={styles.title}>
              Voucher must be presented upon receipt of products
            </AppText>
          </Unorderedlist>
          <Unorderedlist
            style={{
              marginLeft: 25,

              fontSize: 18,
              marginRight: -25,
            }}
            bulletUnicode={0x2022}
            color="#707070"
          >
            <AppText style={styles.title}>
              Not valid with any other promotions or discounts
            </AppText>
          </Unorderedlist>
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

  image: {
    marginVertical: -20,
    marginHorizontal: 60,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  voucherTitle: {
    color: colors.olive,
    fontSize: 19,
    fontWeight: "bold",
    marginHorizontal: 25,
    //marginVertical: 5,
    marginTop: 20,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
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
export default MyVoucher;
