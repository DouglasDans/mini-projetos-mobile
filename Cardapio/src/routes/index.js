import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pizza from "../pages/pizza";
import Hamburguer from "../pages/hamburguer";
import Bebida from "../pages/bebida";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Pizza"
          component={Pizza}
          options={{
            tabBarIcon: () => {
              return <Text>🍕</Text>;
            },
          }}
        />
        <Tab.Screen
          name="Hambúrguer"
          component={Hamburguer}
          options={{
            tabBarIcon: () => {
              return <Text>🍔</Text>;
            },
          }}
        />
        <Tab.Screen
          name="Bebida"
          component={Bebida}
          options={{
            tabBarIcon: () => {
              return <Text>🍹</Text>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
