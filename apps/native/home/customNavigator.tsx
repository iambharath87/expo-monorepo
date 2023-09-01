import {
  StackNavigationOptions,
  createStackNavigator
} from "@react-navigation/stack";
import { withLayoutContext } from "expo-router";

export const stackNavigator = createStackNavigator();

export const CustomNavigator = withLayoutContext<
  StackNavigationOptions,
  typeof stackNavigator.Navigator
>(stackNavigator.Navigator);
