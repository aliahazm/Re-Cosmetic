import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermsAndConditions from "../screens/TermsAndConditions";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const TermsAndConditionsNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="TermsAndConditions"
      component={TermsAndConditions}
      options={{
        title: "TERMS & CONDITIONS",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default TermsAndConditionsNavigator;
