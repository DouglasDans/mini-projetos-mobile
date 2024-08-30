import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
  button: {
    height: 40,
    width: 300,
    margin: 24,
    backgroundColor: "#e0ebf0",
    padding: 10,
    borderRadius: 10,
  },
  dateContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  textCenter: {
    textAlign: "center",
  },
});

export default styles;
