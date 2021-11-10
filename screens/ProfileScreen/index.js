import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "./components/Orders";
import MainScreen from "./components/ProfileScreen";
import { colors } from "../../assets/colors";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
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
        name="Main Profile"
        component={MainScreen}
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
        name="Orders"
        component={Orders}
      />
    </Stack.Navigator>
  );
}
