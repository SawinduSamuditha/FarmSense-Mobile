import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/Dashboard";
import PredictionScreen from "../screens/PredictionChartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ContactUsScreen from "../screens/contactUS";


const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/*<Stack.Screen name="Signup" component={SignupScreen} />*/}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Prediction" component={PredictionScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}