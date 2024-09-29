import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Hamburguer() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/hamburguer.jpg")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Sabores de Hambúrguer</Text>
        <View style={styles.description}>
          <Text style={styles.text}>
            Cheeseburger Clássico: Hambúrguer suculento, queijo cheddar
            derretido, alface fresca, tomate e maionese caseira, servido em pão
            brioche.
          </Text>
          <Text style={styles.text}>
            Bacon Deluxe: Hambúrguer 100% bovino, queijo cheddar, tiras
            crocantes de bacon, cebola caramelizada e molho barbecue.
          </Text>
          <Text style={styles.text}>
            Vegetariano Especial: Hambúrguer de grão-de-bico e quinoa, alface,
            tomate, cebola roxa e maionese vegana no pão integral.
          </Text>
          <Text style={styles.text}>
            Duplo Smash: Dois hambúrgueres finos e crocantes, queijo cheddar
            derretido, picles, cebola e molho especial da casa.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
