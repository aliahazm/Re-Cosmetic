import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecycleSteps from "../screens/RecycleSteps";
import Point from "../screens/Point";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const HowItWorksNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="RecycleSteps"
      component={RecycleSteps}
      //options={{ headerShown: false }}
      options={{
        title: "HOW IT WORKS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen
      name="Point"
      component={Point}
      options={{
        title: "HOW IT WORKS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default HowItWorksNavigator;
