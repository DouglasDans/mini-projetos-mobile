import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "./src/views/UserList";
import UserForm from "./src/views/UserForm";
import UserDetail from "./src/views/UserDetails";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => ({
            title: "Lista de Usuários",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("UserForm")}
                style={{ paddingRight: 15 }}
              >
                <Icon name="add" size={25} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{ title: "Formulário de Usuários" }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={{ title: "Detalhes do Usuário" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#009955",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
