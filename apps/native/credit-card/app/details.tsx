import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details page</Text>
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
