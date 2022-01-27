import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllRewards from "../screens/AllRewards";
import MyRewards from "../screens/MyRewards";
import MyVoucher from "../screens/MyVoucher";
import colors from "../config/colors";
import MyVoucher15 from "../screens/MyVoucher15";
import MyVoucher50 from "../screens/MyVoucher50";

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
      name="MyVoucher15"
      component={MyVoucher15}
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
    <Stack.Screen
      name="MyVoucher50"
      component={MyVoucher50}
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
