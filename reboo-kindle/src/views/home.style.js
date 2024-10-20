import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    height: 200,
    width: 150,
  },
  text: {
    color: "#F5F5FC",
  },
});

export default styles;
