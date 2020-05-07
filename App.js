import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login.js';
import Timer from './Components/Timer.js';
import Train from './Components/Train.js';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ Login } />
        <Stack.Screen name='Run' component={ Timer } />
        <Stack.Screen name='Train' component={ Train } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
