import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "react-native-vector-icons";
import { colors } from "../../assets/colors";
import CategoriesScreen from "../CategoriesScreen";
import HomeScreen from "../HomeScreen";
import ProfileScreen from "../ProfileScreen";
import RestaurantsScreen from "../RestaurantsScreen";

const Tab = createBottomTabNavigator();

export default function LandingScreen() {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons
              name="restaurant-outline"
              color={colors.primary}
              size={size}
            />
          ),
        }}
        name="Foods"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size }) => (
            <AntDesign name="home" color={colors.primary} size={size} />
          ),
        }}
        name="Restaurants"
        icon="home"
        component={RestaurantsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="menu" color={colors.primary} size={size} />
          ),
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="person" color={colors.primary} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
