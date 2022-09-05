import {
  COLORS,
  RadioButton,
  RadioButtonItem,
  RadioButtonValue,
} from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const RadioButtonComponent: NextPageWithLayout = () => {
  const [selectedRadio, setSelectedRadio] = useState<RadioButtonValue>(1);
  let __componentName = "RadioButton";
  let __componentDescription =
    "Radio buttons allows to selection a single option from a list.";
  let __importCodeString = `import { RadioButton, RadioButtonValue, RadioButtonItem } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `   <RadioButton
      btnColor={COLORS.green}
      onChange={setSelectedRadio}
      selected={selectedRadio}
    >
      <RadioButtonItem value={1}>Radio button</RadioButtonItem>
      <RadioButtonItem value={2}>Radio button</RadioButtonItem>
    </RadioButton>`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of RadioButton.",
    },
    {
      name: "onChange",
      type: "(event: GestureResponderEvent) => void",
      des: "Change RadioButton item to save value to state elements of RadioButton.",
    },
    {
      name: "selected",
      type: "RadioButtonValue",
      des: "Store selected item.",
    },
    {
      name: "btnColor",
      type: "string",
      des: "Button color of RadioButton.",
    },
  ];
  let __properticsTwo: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of RadioButtonItem.",
    },
    {
      name: "btnColor",
      type: "string",
      des: "Button color of RadioButtonItem.",
    },
    {
      name: "value",
      type: "RadioButtonValue",
      des: "Store selected RadioButtonItem value.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="RadioButton Propertics"
        properticsTwoTitle="RadioButtonItem Propertics"
        properticsOne={__properticsOne}
        properticsTwo={__properticsTwo}
      >
        <RadioButton
          btnColor={COLORS.green}
          onChange={setSelectedRadio}
          selected={selectedRadio}
        >
          <RadioButtonItem value={1}>Radio Item One</RadioButtonItem>
          <RadioButtonItem value={2}>Radio Item Two</RadioButtonItem>
        </RadioButton>
      </RenderItem>
    </ScrollView>
  );
};

RadioButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default RadioButtonComponent;
