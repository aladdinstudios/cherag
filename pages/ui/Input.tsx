import { COLORS, Input } from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const InputComponent: NextPageWithLayout = () => {
  const [userName, setUserName] = useState<string>();
  let __componentName = "Input";
  let __componentDescription =
    "The Input component allows a user to provide input in a text field.";
  let __importCodeString = `import { Input } from "cherag-ui"`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `
    <Input
      onChangeText={setUserName}
      value={userName}
      placeholder="Enter name"
      leftIcon="lock"
      rightIcon="eye"
      borderColor={COLORS.errorIcon}
      leftIconColor={COLORS.errorIcon}
      rightIconColor={COLORS.errorIcon}
      placeholderTextColor={COLORS.border}
    />`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Input.",
    },
    {
      name: "placeholder",
      type: "string",
      des: "Placeholder name of Input.",
    },
    {
      name: "onPressLeftIcon",
      type: "(values:any)=> any",
      des: "onPressLeftIcon providing left icon action.",
    },
    {
      name: "onPressRightIcon",
      type: "(values:any)=> any",
      des: "onPressRightIcon providing right icon action.",
    },
    {
      name: "leftIcon",
      type: "string",
      des: "Name of the left icon.",
    },
    {
      name: "leftIconColor",
      type: "string",
      des: "Color of the left icon.",
    },
    {
      name: "rightIcon",
      type: "string",
      des: "Name of the right icon.",
    },
    {
      name: "rightIconColor",
      type: "string",
      des: "Color of the right icon.",
    },
    {
      name: "fontSize",
      type: "number",
      des: "Font size of Input text.",
    },
    {
      name: "iconSize",
      type: "number",
      des: "Icon size of Input.",
    },
    {
      name: "borderWidth",
      type: "number",
      des: "Border thickness of Input.",
    },
    {
      name: "borderColor",
      type: "string",
      des: "Border color of the Input.",
    },
    {
      name: "inputBoxWidth",
      type: "number",
      des: "With of input box.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <Input
          onChangeText={setUserName}
          value={userName}
          placeholder="Enter name"
          leftIcon="lock"
          rightIcon="eye"
          borderColor={COLORS.errorIcon}
          leftIconColor={COLORS.errorIcon}
          rightIconColor={COLORS.errorIcon}
          placeholderTextColor={COLORS.border}
        />
      </RenderItem>
    </ScrollView>
  );
};

InputComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default InputComponent;
