import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "100%",
    backgroundColor: "#121418",
    display: "flex",
    gap: 10,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 10,
    overflow: "hidden",
    paddingLeft: 20,
    paddingRight: 20,
  },
  tab: {
    borderColor: "#F5F5FC",
    borderWidth: 1,
    padding: 4,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text: {
    color: "#F5F5FC",
  },
  input: {
    backgroundColor: "#1C1E26",
    color: "#F5F5FC",
    width: "100%",
    padding: 10,
    height: 40,
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});

export default styles;
