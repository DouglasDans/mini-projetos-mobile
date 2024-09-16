import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Countdown from "./Countdown";
import PersonCounter from "./PersonCounter";

export default function App() {
  const eventDate = "2024-12-31T00:00:00"; // Data do evento no padrão ISO

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convite para o Evento</Text>
      <Countdown eventDate={eventDate} />
      <PersonCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
