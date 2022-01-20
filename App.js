import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTheme from "./app/navigation/navigationTheme";

import Signup from "./components/Signup";
import Login from "./components/Login";
import AppNavigator from "./app/navigation/AppNavigator";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="Dashboard"
        component={AppNavigator}
        options={{ headerLeft: null }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MyStack/>
    </NavigationContainer>
  );
}

// import React from "react";

// import Login from "./app/screens/Login";

// export default function App() {
//   return <Login />;
// }
