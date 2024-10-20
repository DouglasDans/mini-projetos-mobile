import React from "react";
import Header from "../layout/header.layout";
import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./home.style";
import { Ionicons } from "@expo/vector-icons";

export default function Home({}) {
  return (
    <Header>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Ionicons name="library" size={24} color="#F5F5FC" />
          <Text style={styles.text}>Da sua biblioteca</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => console.log("Image 1 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/81jbivNEVML._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Image 2 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/81u+ljPVifL._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Image 3 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/815d9tE7jSL._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Image 4 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/81jbivNEVML._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Pra você que curte Harry Potter</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => console.log("Image 5 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/91wfHwESyfL._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Image 6 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/615X3R9w6CL._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Image 7 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/81jbivNEVML._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Image 8 pressed")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/81jbivNEVML._SL1500_.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Header>
  );
}
