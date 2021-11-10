import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Foods from "./Foods";
import CategoriesScreen from "./CategoriesScreen";
import { colors } from "../../assets/colors";

const Stack = createStackNavigator();

const Categories = () => {
  return (
    <Stack.Navigator headerMode="screen">
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
        name="Categories"
        component={CategoriesScreen}
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
        name="Foods"
        component={Foods}
      />
    </Stack.Navigator>
  );
}

export default Categories