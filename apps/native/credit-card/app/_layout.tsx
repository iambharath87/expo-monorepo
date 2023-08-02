import { Stack } from "expo-router";
import Details from "./details";
import CreditCard from "./index";

export default function CreditCardLayout({ customNavigator }: { customNavigator?: any }) {
  if (customNavigator) {
    return (
      <customNavigator.Navigator>
        <customNavigator.Screen name="Home" component={CreditCard} />
        <customNavigator.Screen name="Details" component={Details} />
      </customNavigator.Navigator>
    );
  }

  return <Stack />;
}
