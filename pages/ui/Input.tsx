import { COLORS, Div, Input } from "cherag-ui";
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
      code: `   <Input
      onChangeText={setUserName}
      value={userName}
      placeholder="Enter name"
      leftIcon="lock"
      rightIcon="eye"
      borderColor={COLORS.errorIcon}
      leftIconColor={COLORS.errorIcon}
      rightIconColor={COLORS.errorIcon}
      placeholderTextColor={COLORS.errorIcon}
      w={200}
      h={40}
    />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
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
      type: "(event: GestureResponderEvent) => void",
      des: "onPressLeftIcon providing left icon action.",
    },
    {
      name: "onPressRightIcon",
      type: "(event: GestureResponderEvent) => void",
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
      name: "w",
      type: "number",
      des: "With of input box.",
    },
    {
      name: "h",
      type: "number",
      des: "Height of input box.",
    },
    {
      name: "textPadding",
      type: "number",
      des: "Padding of input text.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Input propertics"
        properticsOne={__properticsOne}
      >
        <Div
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
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
            placeholderTextColor={COLORS.errorIcon}
            w={200}
            h={40}
          />
          <Input
            onChangeText={setUserName}
            value={userName}
            placeholder="Enter name"
            leftIcon="lock"
            rightIcon="eye"
            borderColor={COLORS.blue}
            leftIconColor={COLORS.blue}
            rightIconColor={COLORS.blue}
            placeholderTextColor={COLORS.blue}
            w={300}
            h={60}
          />
          <Input
            onChangeText={setUserName}
            value={userName}
            placeholder="Enter name"
            leftIcon="lock"
            rightIcon="eye"
            borderColor={COLORS.sayn}
            leftIconColor={COLORS.sayn}
            rightIconColor={COLORS.sayn}
            placeholderTextColor={COLORS.sayn}
            w={200}
            h={30}
          />
          <Input
            onChangeText={setUserName}
            value={userName}
            placeholder="Enter name"
            leftIcon="lock"
            rightIcon="eye"
            borderColor={COLORS.red}
            leftIconColor={COLORS.red}
            rightIconColor={COLORS.red}
            placeholderTextColor={COLORS.red}
            w={120}
            h={20}
          />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

InputComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default InputComponent;
