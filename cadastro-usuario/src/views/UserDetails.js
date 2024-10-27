import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserDetail({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <Text style={styles.info}>Nome: {user.nome}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Sexo: {user.sexo}</Text>
      <Text style={styles.info}>UF: {user.UF}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    marginVertical: 4,
  },
});
