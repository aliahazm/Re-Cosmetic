import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import NewListingButton from "./NewListingButton";
import routes from "./routes";
import HowItWorksNavigator from "./HowItWorksNavigator";
import RewardNavigator from "./RewardNavigator";
import AboutUsNavigator from "./AboutUsNavigator";
import TermsAndConditionsNavigator from "./TermsAndConditionsNavigator";
import RecycleRequestNavigator from "./RecycleRequestNavigator";
import MyPoints from "../screens/MyPoints";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={AboutUsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Reward"
      component={RewardNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="wallet-giftcard"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="RecycleRequest"
      component={RecycleRequestNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.RECYCLE_REQUEST)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="recycle" color={color} size={size} />
        ),
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="Reminder"
      component={TermsAndConditionsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-notifications" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HowItWorksNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
