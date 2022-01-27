import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecycleSteps from "../screens/RecycleSteps";
import Point from "../screens/Point";
import colors from "../config/colors";

import More from "../screens/More";
import AboutUs from "../screens/AboutUs";
import TermsAndConditions from "../screens/TermsAndConditions";
import ChangePassword from "../screens/ChangePassword";

const Stack = createNativeStackNavigator();

const MoreNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="More"
      component={More}
      options={{
        title: "MORE",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="RecycleSteps"
      component={RecycleSteps}
      options={{
        title: "HOW IT WORKS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
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
        headerBackTitle: "Back",
      }}
    />

    <Stack.Screen
      name="AboutUs"
      component={AboutUs}
      options={{
        title: "ABOUT US",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
      }}
    />

    <Stack.Screen
      name="TermsAndConditions"
      component={TermsAndConditions}
      options={{
        title: "TERMS & CONDITIONS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
      }}
    />

    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{
        title: "Password",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackTitle: "Back",
      }}
    />
  </Stack.Navigator>
);

export default MoreNavigator;
