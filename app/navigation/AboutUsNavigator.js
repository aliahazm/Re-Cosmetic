import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from "../screens/AboutUs";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const RewardNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="AboutUs"
      component={AboutUs}
      options={{
        title: "ABOUT US",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default RewardNavigator;
