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
import ReminderCard from "../components/ReminderCard";

function Reminder({ navigation }) {
  return (
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
        }}
      >
        <View style={{ marginVertical: 20, marginHorizontal: 50 }}>
          <ReminderCard
            date="31-12-2021 Friday"
            outlet="Outlet: MiliandRose"
            location="Location: Central i-City"
            onPress={() => navigation.navigate(routes.MY_RECYCLE_DETAILS)}
          />
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
export default Reminder;
