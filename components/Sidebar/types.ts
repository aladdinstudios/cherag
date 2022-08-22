import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type Props = {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};
