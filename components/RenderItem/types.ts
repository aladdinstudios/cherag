import { ReactNode } from "react";
import { ProperticsProps } from "../../types/Propertics";

export type RenderItemProps = {
  componentName: string;
  importCodeString: string;
  useCaseCodeString: string;
  children: ReactNode;
  propertics: ProperticsProps[];
};
