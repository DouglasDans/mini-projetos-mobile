import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { App as Mp1 } from "../mps/1-DataNascimento/App";
import { App as Mp2 } from "../mps/2-CalculadoraConversao/App";
import { App as Mp3 } from "../mps/3-Convites/App";
import { App as Mp4 } from "../mps/4-Cardapio/App";
import { App as Mp5 } from "../mps/5-Megasena/App";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="MP1 Data Nascimento"
          component={Mp1}
          options={{
            tabBarIcon: () => {
              return <Text>📆</Text>;
            },
          }}
        />
        <Tab.Screen
          name="MP2 Calculadora"
          component={Mp2}
          options={{
            tabBarIcon: () => {
              return <Text>🔢</Text>;
            },
          }}
        />
        <Tab.Screen
          name="MP3 Convites"
          component={Mp3}
          options={{
            tabBarIcon: () => {
              return <Text>💌</Text>;
            },
          }}
        />
        <Tab.Screen
          name="MP4 Cardápio"
          component={Mp4}
          options={{
            tabBarIcon: () => {
              return <Text>📜</Text>;
            },
          }}
          independent={true}
        />
        <Tab.Screen
          name="Mp5 Megasena"
          component={Mp5}
          options={{
            tabBarIcon: () => {
              return <Text>🎰</Text>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
