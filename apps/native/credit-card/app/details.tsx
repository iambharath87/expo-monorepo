import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details page</Text>
      <View>
        <Link href="/">{'<-'} Go Home</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
});
