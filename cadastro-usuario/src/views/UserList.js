import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar, Icon } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import usersData from '../data/user';

export default ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const storedUsersData = await AsyncStorage.getItem('users');
    const storedUsers = storedUsersData ? JSON.parse(storedUsersData) : [];
    const allUsers = [...usersData, ...storedUsers];
    setUsers(allUsers);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUsers();
    }, [])
  );

  const handleDelete = async (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);

    const newUsers = filteredUsers.filter((user) => !usersData.some(u => u.id === user.id));
    await AsyncStorage.setItem('users', JSON.stringify(newUsers));
  };

  function getActions(user) {
    return (
      <>
        <Button
          title="Edit"
          onPress={() => navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="black" />}
        />
        <Button
          title="Delete"
          onPress={() => handleDelete(user.id)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        onPress={() => navigation.navigate('UserDetail', { user })} // Navigate to UserDetail with user data
        bottomDivider
      >
        <Avatar size={50} rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.nome}</ListItem.Title>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
