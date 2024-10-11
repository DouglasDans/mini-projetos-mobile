import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
import Home from '@/pages/home';
import GameDetails from '@/pages/game-details';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{
          title: 'PlayNow',
          headerStyle: {
            backgroundColor: '#790DB6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Details" component={GameDetails} options={{
          title: 'Informações do Jogo',
          headerStyle: {
            backgroundColor: '#790DB6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}