import { Dropdown, DropdownItem } from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const DropdownComponent: NextPageWithLayout = () => {
  const [selectItem, setSelectItem] = useState<string>();
  let __componentName = "Dropdown";
  let __componentDescription =
    "Use the Div component as a layout primitive to add margin, padding, and colors to content.";
  let __importCodeString = `import { Dropdown, DropdownItem } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `
    <Dropdown
      onChange={setSelectItem}
      selected={selectItem}
      header="Choose Service"
      width={80}
    >
      <DropdownItem value="one">Product one</DropdownItem>
      <DropdownItem value="two">Product two</DropdownItem>
      <DropdownItem value="three">Product three</DropdownItem>
    </Dropdown>`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of Div.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Div.",
    },
    {
      name: "bg",
      type: "string",
      des: "Background color of Div.",
    },
    {
      name: "w",
      type: "number",
      des: "Width of Div.",
    },
    {
      name: "h",
      type: "number",
      des: "Height of Div.",
    },
    {
      name: "p",
      type: "number",
      des: "Padding of Div.",
    },
    {
      name: "m",
      type: "number",
      des: "Margin of Div.",
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
        <Dropdown
          onChange={setSelectItem}
          selected={selectItem}
          header="Choose Service"
          width={80}
        >
          <DropdownItem value="one">Product one</DropdownItem>
          <DropdownItem value="two">Product two</DropdownItem>
          <DropdownItem value="three">Product three</DropdownItem>
        </Dropdown>
      </RenderItem>
    </ScrollView>
  );
};

DropdownComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default DropdownComponent;
