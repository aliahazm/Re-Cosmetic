import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import routes from "../navigation/routes";
import colors from "../config/colors";
function Point({ navigation }) {
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
        <View //Button : Recycle Steps
          style={styles.recycleStepsButton}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.RECYCLE_STEPS)}
          >
            <Text style={styles.recycleStepsButtonTitle}>RECYCLE STEPS</Text>
          </TouchableOpacity>
        </View>

        <View //Button : Point
          style={styles.pointButton}
        >
          <TouchableOpacity onPress={() => navigation.navigate(routes.POINT)}>
            <Text style={styles.pointButtonTitle}>POINT</Text>
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
      <ScrollView
        style={{
          backgroundColor: colors.pink,
          flex: 1,
        }}
      >
        <Image style={styles.image} source={require("../assets/HIW2.png")} />
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

  recycleStepsButton: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  pointButton: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  recycleStepsButtonTitle: {
    color: "#707070",
    fontSize: 18,
  },

  pointButtonTitle: {
    color: "#6a7d5a",
    fontSize: 18,
    fontWeight: "600",
  },

  image: {
    width: 414,
    height: 940,
    alignItems: "center",
  },
});
export default Point;
