import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Bebida() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/bebidas.jpg")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Bebidas</Text>
        <View style={styles.description}>
          <Text style={styles.text}>
            Refrigerantes: Coca-Cola, Guaraná, Sprite – Disponíveis em lata e
            garrafa.
          </Text>
          <Text style={styles.text}>
            Suco Natural: Sucos feitos na hora, sabores de laranja, limão,
            maracujá e morango.
          </Text>
          <Text style={styles.text}>
            Chá Gelado: Limão, pêssego ou frutas vermelhas.
          </Text>
          <Text style={styles.text}>
            Cervejas Artesanais: Diversas opções de cervejas locais e
            importadas, incluindo IPAs e lagers.
          </Text>
          <Text style={styles.text}>Água Mineral: Com ou sem gás.</Text>
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
