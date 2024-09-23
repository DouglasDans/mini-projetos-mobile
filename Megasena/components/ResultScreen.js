import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultScreen({ result, drawnNumbers, userNumbers }) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <Text style={styles.text}>
        Números escolhidos: {userNumbers.join(", ")}
      </Text>
      <Text style={styles.text}>
        Números sorteados: {drawnNumbers.join(", ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});
