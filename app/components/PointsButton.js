import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function PointsButton({title, onPress, color = "olive" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.olive,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "50%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default PointsButton;
