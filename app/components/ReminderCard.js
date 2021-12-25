import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "./AppText/AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function ReminderCard({ date, outlet, location, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{date}</AppText>
          <AppText style={styles.subTitle}>{outlet}</AppText>
          <AppText style={styles.subTitle}>{location}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.lightGreen,
    marginBottom: 10,
    //overflow: "hidden",
  },

  detailsContainer: {
    padding: 20,
    marginHorizontal: 20,
  },

  subTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "200",
    paddingTop: 5,
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ReminderCard;
