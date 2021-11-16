import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import MyPoints from "../screens/MyPoints";
import AllRewards from "../screens/AllRewards";
import MyRewards from "../screens/MyRewards";
import MyVoucher from "../screens/MyVoucher";

const Stack = createNativeStackNavigator();

const MyPointsNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="MyPoints"
      component={MyPoints}
      options={{
        title: "MY POINTS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />

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
        headerBackVisible: true,
      }}
    />

    {/* <Stack.Screen
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
      name="MyVoucher"
      component={MyVoucher}
      options={{
        title: "MY VOUCHER",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: true,
      }}
    /> */}
  </Stack.Navigator>
);

export default MyPointsNavigator;
