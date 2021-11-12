import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
function RedeemButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.olive,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "50%",
    marginTop: -25,
    marginBottom: 10,
  },

  text: {
    color: colors.white,
    fontSize: 16,
  },
});
export default RedeemButton;
