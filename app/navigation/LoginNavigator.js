import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../config/colors";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
);

export default LoginNavigator;
