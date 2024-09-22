import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import ResultScreen from "./components/ResultScreen";
import ButtonsWrapper from "./components/buttonsWrapper";

export default function App() {
  const [userNumbers, setUserNumbers] = useState([]);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [result, setResult] = useState("");

  // Função para gerar os números da mega-sena
  const generateRandomNumbers = () => {
    let numbers = [];
    while (numbers.length < 6) {
      let randomNum = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    setDrawnNumbers(numbers);
    checkResult(userNumbers, numbers);
  };

  // Função para verificar o resultado
  const checkResult = (userNums, drawnNums) => {
    const matches = userNums.filter((num) => drawnNums.includes(num)).length;

    switch (matches) {
      case 6:
        setResult("Parabéns! Você fez a SENA!");
        break;
      case 5:
        setResult("Você fez a QUINA!");
        break;
      case 4:
        setResult("Você fez a QUADRA!");
        break;
      default:
        setResult("Não ganhou, tente novamente.");
    }
  };

  function resetSystem() {
    setDrawnNumbers([]);
    setResult("");
    setUserNumbers([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Mega-Sena</Text>
      <ButtonsWrapper
        userNumbers={userNumbers}
        setUserNumbers={setUserNumbers}
      />
      <Button title="Sortear Números" onPress={generateRandomNumbers} />
      <ResultScreen
        result={result}
        drawnNumbers={drawnNumbers}
        userNumbers={userNumbers}
      />

      <TouchableOpacity style={styles.button} onPress={resetSystem}>
        <Text style={styles.buttonText}>Tentar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a1259",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffc300",
  },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
