import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ToastAndroid,
} from "react-native";
import styles from "./app.styles";

export function App() {
  const [celsius, setCelsius] = useState("");
  const [kmh, setKmh] = useState("");

  // Função de conversão de Celsius para Fahrenheit
  function convertTemperature() {
    const celsiusValue = parseFloat(celsius);
    if (isNaN(celsiusValue)) {
      Alert.alert("Erro", "Insira um valor válido para Celsius");
      return;
    }
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    ToastAndroid.show(
      `Fahrenheit: ${fahrenheitValue.toFixed(4)}`,
      ToastAndroid.SHORT
    );
  }

  // Função de conversão de km/h para mph
  const convertSpeed = () => {
    const kmhValue = parseFloat(kmh);
    if (isNaN(kmhValue)) {
      Alert.alert("Erro", "Insira um valor válido para km/h");
      return;
    }
    const mphValue = kmhValue * 0.621371;
    ToastAndroid.show(`mph: ${mphValue.toFixed(4)}`, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Conversão</Text>

      <View>
        <Text style={styles.label}>Temperatura (ºC para ºF)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira a temperatura em ºC"
          value={celsius}
          onChangeText={setCelsius}
        />
        <Button title="Converter para ºF" onPress={convertTemperature} />
      </View>

      <View>
        <Text style={styles.label}>Velocidade (km/h para mph)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira a velocidade em km/h"
          value={kmh}
          onChangeText={setKmh}
        />
        <Button title="Converter para mph" onPress={convertSpeed} />
      </View>
    </View>
  );
}
