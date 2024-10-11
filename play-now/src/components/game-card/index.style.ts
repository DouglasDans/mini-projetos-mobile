import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
    padding: 16,
    backgroundColor: "#242424",
    borderRadius: 16,
  },
  image: {
    width: "auto",
    height: 200,
    borderRadius: 12,
  },
  content: {
    display: "flex",
    gap: 4,
  },
  text: {
    color: "#F5F5FC",
  },
  h1: {
    fontSize: 26,
    color: "#F5F5FC",
  },
});

export default styles;
