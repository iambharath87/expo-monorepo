import { Stack } from 'expo-router';

export default function CreditCardLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Credit Card' }} />
    </Stack>
  );
}
