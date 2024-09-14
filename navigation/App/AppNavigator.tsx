import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "../types/app";
import { TabStack } from "./Navigators";
import SplashScreen from "../../components/SplashScreen";

const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group>
        <Screen name="TabStack" component={TabStack} />
      </Group>
    </Navigator>
  );
}
