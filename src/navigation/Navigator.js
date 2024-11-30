import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js'; // Import HomeScreen

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
