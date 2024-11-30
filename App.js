import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator.js'; // Import Navigator from your navigation folder

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
