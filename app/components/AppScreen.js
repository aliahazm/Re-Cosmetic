import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default AppScreen;

// import React from "react";
// import Constants from "expo-constants";
// import { SafeAreaView, StyleSheet, View } from "react-native";

// function AppScreen({ children, style }) {
//   return (
//     <SafeAreaView style={[styles.screen, style, { backgroungColor: "yellow" }]}>
//       <View style={([style], { flexbackgroundColor: "orange" })}>{children}</View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: Constants.statusBarHeight,
//     flex: 1,
//   },
// });

// export default AppScreen;
