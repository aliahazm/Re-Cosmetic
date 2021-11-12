import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import colors from "../config/colors";

function RecycleSteps({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <View //Secondary Flexbox : Buttons
        style={{
          backgroundColor: colors.white,
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
            backgroundColor: colors.grey,
            flex: 1,
          }}
        ></View>

        <View //Highlight : Creme
          style={{
            backgroundColor: colors.pink,
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
        <Image style={styles.image} source={require("../assets/HIW1.png")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
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
    color: "#6a7d5a",
    fontWeight: "600",
    fontSize: 18,
  },

  pointButtonTitle: {
    color: "#707070",
    fontSize: 18,
  },

  image: {
    width: 414,
    height: 940,
    alignItems: "center",
  },
});
export default RecycleSteps;
