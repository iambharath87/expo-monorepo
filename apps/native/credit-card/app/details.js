import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>This is Details page</Text>
        <Link style={styles.subtitle} href={"/"}>
          {"<-"} Go home
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
