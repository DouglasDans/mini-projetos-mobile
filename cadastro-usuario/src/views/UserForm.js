import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ navigation }) => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [uf, setUf] = useState('');
  const [email, setEmail] = useState('');

  const saveUser = async () => {
    try {
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

    
      const newUser = {
        id: users.length + 1,
        nome: name,
        sexo: sex,
        UF: uf,
        email: email,
        avatarUrl: 'https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_1280.png', 
      };

      users.push(newUser);

      await AsyncStorage.setItem('users', JSON.stringify(users));
      Alert.alert('Success', 'User saved successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save user');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Sex:</Text>
      <TextInput style={styles.input} value={sex} onChangeText={setSex} />
      <Text>UF:</Text>
      <TextInput style={styles.input} value={uf} onChangeText={setUf} />
      <Text>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Button title="Salvar Novo Usuário" onPress={saveUser} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
