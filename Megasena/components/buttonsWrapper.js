import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonsWrapper({ setUserNumbers, userNumbers }) {
  return (
    <View style={styles.grid}>
      {Array.from({ length: 60 }, (_, index) =>
        renderButton(index + 1, setUserNumbers, userNumbers)
      )}
    </View>
  );
}

function renderButton(value, setUserNumbers, userNumbers) {
  return (
    <TouchableOpacity
      style={[styles.button, setSelectedNumberClass(userNumbers, value)]}
      onPress={() => {
        setUserNumbers((prev) => {
          if (prev.length >= 6) {
            return [...prev];
          }

          if (prev.includes(value)) {
            return prev; // Não adiciona o número se ele já estiver presente
          }

          return [...prev, value];
        });
      }}
    >
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

function setSelectedNumberClass(userNumbers, value) {
  if (userNumbers.includes(value)) {
    return styles.buttonSelected;
  }
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 30,
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSelected: {
    backgroundColor: "#ffc300",
  },
});
