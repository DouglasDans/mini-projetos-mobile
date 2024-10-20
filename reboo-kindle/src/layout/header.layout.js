import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./header.style";

export default function Header({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#F5F5FC" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#79849A"
        />
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.text}>Explorar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>|</Text>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.text}>Romance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.text}>Crime suspense e mistério</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>{children}</ScrollView>
    </SafeAreaView>
  );
}
