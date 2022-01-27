import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import MyPoints from "../screens/MyPoints";
import AllRewards from "../screens/AllRewards";
import MyRewards from "../screens/MyRewards";
import MyVoucher from "../screens/MyVoucher";
import TransferPoints from "../screens/TransferPoints";
import Withdraw from "../screens/Withdraw";
import MyVoucher15 from "../screens/MyVoucher15";
import MyVoucher50 from "../screens/MyVoucher50";

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
      name="Withdraw"
      component={Withdraw}
      options={{
        title: "WITHDRAW",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
      }}
    />

    <Stack.Screen
      name="TransferPoints"
      component={TransferPoints}
      options={{
        title: "TRANSFER POINTS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
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
        headerBackTitle: "Back",
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
        headerBackTitle: "Back",
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
      }}
    />
  </Stack.Navigator>
);

export default MyPointsNavigator;
