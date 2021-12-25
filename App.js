import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import Login from "./app/screens/Login";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {
        //<Login/>
        <AppNavigator />
      }
    </NavigationContainer>
  );
}
