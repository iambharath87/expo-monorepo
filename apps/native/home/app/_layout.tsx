import { Stack } from 'expo-router';

export default function Root() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="credit-card" options={{ title: 'Credit Card' }} />
    </Stack>
  );
}
