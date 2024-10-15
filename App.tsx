import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import AddDishScreen from './screens/AddDish';
import { RootStackParamList } from './screens/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDish" component={AddDishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}