import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Pizza() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require("../../assets/pizza.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Sabores de Pizza</Text>
        <View style={styles.description}>
          <Text style={styles.text}>
            Margherita: Molho de tomate artesanal, mozzarella fresca, folhas de
            manjericão e um toque de azeite extra virgem.
          </Text>
          <Text style={styles.text}>
            Pepperoni Supreme: Camada generosa de pepperoni picante, queijo
            mozzarella derretido e molho especial de tomate.
          </Text>
          <Text style={styles.text}>
            Frango com Catupiry: Pedaços suculentos de frango desfiado,
            acompanhados de catupiry cremoso e um toque de orégano.
          </Text>
          <Text style={styles.text}>
            Quatro Queijos: Combinação perfeita de mozzarella, parmesão,
            gorgonzola e provolone, formando uma explosão de sabores.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: "#0ff",
    flex: 1,
  },
  image: {
    width: "fit-content",
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    gap: 20,
  },
  description: {
    display: "flex",
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
});
