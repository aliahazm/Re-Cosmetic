import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import MyRecycleDetails from "../screens/MyRecycleDetails";
import Reminder from "../screens/Reminder";
const Stack = createNativeStackNavigator();

const ReminderNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="Reminder"
      component={Reminder}
      options={{
        title: "REMINDER",
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
      }}
    />
  </Stack.Navigator>
);

export default ReminderNavigator;
