import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import colors from "../config/colors";
function RCScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.pink,
  },
  view: {
    flex: 1,
  },
});

export default RCScreen;
