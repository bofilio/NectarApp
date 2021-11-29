import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import OnBordingScreen from './app/screens/OnBordingScreen';
import theme from './app/theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,StyleSheet } from 'react-native';
import Signin from './app/screens/Signin';
import Number from './app/screens/Number';
import Verification from './app/screens/Verification';
import Location from './app/screens/Location';
import Home from './app/screens/Home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false,}} >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBording" component={OnBordingScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <StatusBar backgroundColor={theme.palette.primary} />
        
    </NavigationContainer>


  );
}
