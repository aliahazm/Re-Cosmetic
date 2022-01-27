import React from "react";
import { SafeAreaView, Image, StyleSheet, View, Alert } from "react-native";

import Unorderedlist from "react-native-unordered-list";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";
function MyVoucher15({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: colors.pink,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.45,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            borderRadius: 25,
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

        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.415,
            width: "90%",
            height: 120,
            borderColor: colors.grey,
            borderRadius: 25,
            alignItems: "flex-start",
            justifyContent: "flex-start",
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
            RC Voucher 15% Off, No Min Spend
          </AppText>
          <AppText style={styles.category}>Validity</AppText>
          <AppText style={styles.title}>Till 28 February 2022</AppText>
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

        <View
          style={{
            width: "90%",
            flex: 0.15,
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
    marginTop: 20,
    justifyContent: "center",
    textAlign: "justify",
  },

  category: {
    color: colors.grey,
    fontSize: 14,
    marginHorizontal: 25,
    marginTop: 20,
    justifyContent: "center",
    textAlign: "justify",
  },

  title: {
    color: colors.grey,
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 25,
    justifyContent: "center",
    textAlign: "justify",
  },
});
export default MyVoucher15;
