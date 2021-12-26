import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {<AppNavigator />}
    </NavigationContainer>
  );
}

// import React from "react";

// import Login from "./app/screens/Login";

// export default function App() {
//   return <Login />;
// }
