import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home App</Text>
      <Link href="/credit-card/">
        <Text style={{ color: 'white' }}>{'->'} Go to Credit Card page</Text>
      </Link>
      <Link href="/@credit-card/details">
        <Text style={{ color: 'white' }}>
          {'->'} Go to Credit Card Details page
        </Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
    color: 'white',
  },
});
