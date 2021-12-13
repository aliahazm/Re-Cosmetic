import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecycleRequest from "../screens/RecycleRequest";
import colors from "../config/colors";
import MyRecycleDetails from "../screens/MyRecycleDetails";
import PointModal from "../components/PointModal";

const Stack = createNativeStackNavigator();

const RecycleRequestNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="RecycleRequest"
      component={RecycleRequest}
      options={{
        title: "RECYCLE REQUEST",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />

    <Stack.Screen
      name="MyRecycleDetails"
      component={MyRecycleDetails}
      options={{
        title: "MY RECYCLE DETAILS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        //headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default RecycleRequestNavigator;
