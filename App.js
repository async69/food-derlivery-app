import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { colors } from "./assets/colors";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          options={{
            headerBackTitleStyle: {
              color: colors.light,
            },
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.light,
            },
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerBackTitleStyle: {
              color: colors.light,
            },
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.light,
            },
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerBackTitleStyle: {
              color: colors.light,
            },
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.light,
            },
          }}
          name="HomeScreen"
          component={LandingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
