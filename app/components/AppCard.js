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
function AppCard({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: "hidden",
  },

  detailsContainer: {
    padding: 30,
    marginHorizontal: 50,
    marginVertical: -20,
  },

  image: {
    width: "100%",
    height: 135,
  },

  subTitle: {
    color: colors.grey,
    fontSize: 13,
  },

  title: {
    color: colors.olive,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default AppCard;
