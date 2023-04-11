import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function CreditCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Credit Card Page</Text>
      <View>
        <Link href="/details">{'->'} Go to Details page</Link>
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
