import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Foods from "./Foods";
import RestaurantsScreen from "./RestaurantsScreen";
import ReviewsScreen from "./Reviews";

import { colors } from "../../assets/colors";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator headerR initialRouteName="Restaurants">
      <Stack.Screen
        name="Restaurants"
        options={{
          headerTitleStyle: {
            color: colors.light,
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
        component={RestaurantsScreen}
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
        name="Reviews"
        component={ReviewsScreen}
      />
    </Stack.Navigator>
  );
}
