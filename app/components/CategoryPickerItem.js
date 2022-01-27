import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function CategoryPickerItem({ item, image, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={item.source}
          style={{
            width: 150,
            height: 150,
            marginBottom: 10,
            borderRadius: 100,
          }}
        />
      </TouchableOpacity>
      <AppText styles={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "50%",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    justifyContent: "center",
  },
});
export default CategoryPickerItem;
