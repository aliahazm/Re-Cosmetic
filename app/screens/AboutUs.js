import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
function AboutUs(props) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.creme,
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: colors.pink,
          flex: 1,
        }}
      >
        <Image style={styles.image} source={require("../assets/Logo.png")} />

        <AppText style={styles.about}>
          RC here is representing the combination of 'Recycle' and 'Cosmetic',
          which hence produced 'Re-cosmetic' as our application name, is a
          mobile platform to recycle cosmetic containers specifically made of
          plastics or glass by bringing the recycle item to any respective
          cosmetic brand shop. It is simply designed for the convenient use of
          cosmetic users that will allow them to use the main features which
          will help them with fast and efficient recycling processes in mobile
          platforms.{"\n"}
          {"\n"}Our Tagline is 'A Verdant Odyssey' which in other words means 'A
          Green Journey'. Therefore, both of our application and tagline refers
          to the application main objective which to encourage cosmetics users
          to recycle recyclables cosmetic container as a together efforts in
          creating a verdant odyssey towards a greener environment in
          conjunction with the Sustainable Development Goal 12 which is to
          ensure sustainable consumption and production patterns through our
          main highlights, namely;{"\n"}
          {"\n"} 1. Recycle Processor
          {"\n"} 2. Points Reward System
          {"\n"} 3. Points-Cash Transfer
          {"\n"} 4. Reminder {"\n"}
          {"\n"}Whether you want to recycle with convenience in just a few
          minutes, locating the nearest cosmetic brand store which allows you to
          recycle, redeeming your voucher from points collected, transferring
          points and cash to selected organizations for charity purpose or
          having personalized reminder system to remind on recycle appointments
          set, they are all ready to use on-the-go!{"\n"}
          {"\n"}
        </AppText>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    flex: 1,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.olive,
    marginVertical: 20,
  },

  previousPage: {
    backgroundColor: colors.creme,
    flex: 0.5,
    left: 25,
  },

  menu: {
    backgroundColor: colors.creme,
    flex: 0.5,
    right: -50,
  },

  image: {
    marginTop: 50,
    marginBottom: 35,
    marginHorizontal: 110,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  about: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginVertical: 0,
    justifyContent: "center",
    textAlign: "justify",
    lineHeight: 19,
  },
});
export default AboutUs;
