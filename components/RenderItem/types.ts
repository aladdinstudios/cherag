import { ReactNode } from "react";

export interface ProperticsProps {
  name: string;
  type: string;
  des: string;
}
export interface UsecaseArrayObjProps {
  name: string;
  code: string;
}
export type RenderItemProps = {
  componentName: string;
  componentDescription: string;
  importCodeString: string;
  usecaseCodeStringArr: UsecaseArrayObjProps[];
  children: ReactNode;
  properticsOneTitle?: string;
  properticsOne?: ProperticsProps[];
  properticsTwoTitle?: string;
  properticsTwo?: ProperticsProps[];
  properticsThreeTitle?: string;
  properticsThree?: ProperticsProps[];
};
