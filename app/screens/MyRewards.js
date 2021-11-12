import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import MyVoucher from "./MyVoucher";
import routes from "../navigation/routes";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppCard from "../components/AppCard";
function MyRewards({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      <View //Secondary Flexbox : Buttons
        style={{
          backgroundColor: colors.creme,
          flex: 0.075,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View //Button : All Rewards
          style={styles.allRewardsButton}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.ALL_REWARDS)}
          >
            <Text style={styles.allRewardsButtonTitle}>ALL REWARDS</Text>
          </TouchableOpacity>
        </View>

        <View //Button : My Rewards
          style={styles.myRewardsButton}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.MY_REWARDS)}
          >
            <Text style={styles.myRewardsButtonTitle}>MY REWARDS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View //Button Highlights
        style={{
          backgroundColor: colors.creme,
          flex: 0.003,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View //Highlight : Grey
          style={{
            backgroundColor: colors.pink,
            flex: 1,
          }}
        ></View>

        <View //Highlight : Creme
          style={{
            backgroundColor: colors.grey,
            flex: 1,
          }}
        ></View>
      </View>

      {/* Content */}

      <View
        style={{
          backgroundColor: colors.pink,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppCard
          title="RC Voucher 15% OFF"
          subTitle="Valid Until : 31 December 2021"
          image={require("../assets/RCVoucher/RCVoucher15.png")}
          onPress={() => navigation.navigate(routes.MY_VOUCHER)}
        />

        <AppCard
          title="RC Voucher 30% OFF"
          subTitle="Valid Until : 31 December 2021"
          image={require("../assets/RCVoucher/RCVoucher30.png")}
          onPress={() => navigation.navigate(routes.MY_VOUCHER)}
        />

        <AppCard
          title="RC Voucher 50% OFF"
          subTitle="Valid Until : 31 December 2021"
          image={require("../assets/RCVoucher/RCVoucher50.png")}
          onPress={() => navigation.navigate(routes.MY_VOUCHER)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  content: {
    color: colors.grey,
    fontSize: 14,
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

  RCPoints: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: -19,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },

  earn: {
    color: colors.grey,
    fontSize: 16,
    //fontWeight: "bold",
    marginHorizontal: 103,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    //lineHeight: 19,
  },

  allRewardsButton: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  myRewardsButton: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  allRewardsButtonTitle: {
    color: "#707070",

    fontSize: 18,
  },

  myRewardsButtonTitle: {
    color: "#6a7d5a",
    fontWeight: "600",
    fontSize: 18,
  },
});
export default MyRewards;
