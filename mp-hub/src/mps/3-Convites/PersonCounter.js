import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const PersonCounter = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [elderly, setElderly] = useState(0);

  const totalPeople = adults + children + elderly;

  return (
    <View styles={styles.container}>
      <View>
        <Text>Adultos: {adults}</Text>
        <Button
          title="Adicionar Adulto"
          onPress={() => setAdults(adults + 1)}
        />
      </View>
      <View>
        <Text>Crianças: {children}</Text>
        <Button
          title="Adicionar Criança"
          onPress={() => setChildren(children + 1)}
        />
      </View>
      <View>
        <Text>Idosos: {elderly}</Text>
        <Button
          title="Adicionar Idoso"
          onPress={() => setElderly(elderly + 1)}
        />

        <Text>Total de Pessoas: {totalPeople}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PersonCounter;
