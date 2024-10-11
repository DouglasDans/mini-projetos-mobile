import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Pizza"
          component={<View>sdfibsdifub</View>}
          options={{
            tabBarIcon: () => {
              return <Text>🍕</Text>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}