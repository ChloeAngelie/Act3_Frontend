// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegistrationPage from './screens/RegistrationPage';
import AccountRecoveryPage from './screens/AccountRecoveryPage';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
