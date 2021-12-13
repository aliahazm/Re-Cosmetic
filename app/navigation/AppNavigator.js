import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import NewListingButton from "./NewListingButton";
import routes from "./routes";
import MoreNavigator from "./MoreNavigator";
import RewardNavigator from "./RewardNavigator";
import HomeNavigator from "./HomeNavigator";
import TermsAndConditionsNavigator from "./TermsAndConditionsNavigator";
import RecycleRequestNavigator from "./RecycleRequestNavigator";
import MyPointsNavigator from "./MyPointsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Points"
      component={MyPointsNavigator}
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
      name="More"
      component={MoreNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="more-horiz" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
