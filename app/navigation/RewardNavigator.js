import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllRewards from "../screens/AllRewards";
import MyRewards from "../screens/MyRewards";
import MyVoucher from "../screens/MyVoucher";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const RewardNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="AllRewards"
      component={AllRewards}
      options={{
        title: "REWARD",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />

    <Stack.Screen
      name="MyRewards"
      component={MyRewards}
      options={{
        title: "REWARD",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />

    <Stack.Screen
      name="MyVoucher"
      component={MyVoucher}
      options={{
        title: "MY VOUCHER",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default RewardNavigator;
