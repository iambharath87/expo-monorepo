import { Stack } from 'expo-router';

export default function CreditCardLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Credit Card' }} />
      <Stack.Screen
        name="details"
        options={{ title: 'Details', headerShown: false }}
      />
    </Stack>
  );
}
