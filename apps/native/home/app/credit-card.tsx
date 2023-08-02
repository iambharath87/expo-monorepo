import CreditCardLayout from "credit-card/app/_layout";
import { CustomNavigator, stackNavigator } from "../customNavigator";

export default function CreditCardApp() {
  return (
    <>
      <CustomNavigator.Screen options={{ headerShown: false }} />
      <CreditCardLayout customNavigator={stackNavigator} />
    </>
  );
}
