import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: "HOME",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        headerShown: false,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
