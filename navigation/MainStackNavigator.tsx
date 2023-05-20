import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughScreen from "../screens/Register/WalkthroughScreen/Walkthrough.screen";
import NumberScreen from "../screens/Register/NumberScreen/Number.screen";
import OTPScreen from "../screens/Register/OTPScreen/OTP.screen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NumberScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
      <Stack.Screen name="NumberScreen" component={NumberScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
