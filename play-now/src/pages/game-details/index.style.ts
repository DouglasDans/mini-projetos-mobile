import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#090a0a",
    padding: 16,
    paddingBottom: 40,
  },
  image: {
    width: "auto",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  content: {
    display: "flex",
    gap: 16,
  },
  card: {
    display: "flex",
    gap: 16,
    padding: 16,
    backgroundColor: "#242424",
    borderRadius: 16,
  },
  text: {
    color: "#F5F5FC",
  },
  h1: {
    fontSize: 26,
    fontWeight: "700",
    color: "#F5F5FC",
  },
  h2: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F5F5FC",
  },
});

export default styles;
