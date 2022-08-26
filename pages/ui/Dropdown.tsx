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
    "Use the Dropdown component to select an item to dropdown list.";
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
      des: "Child elements of Dropdown.",
    },
    {
      name: "onChange",
      type: "(values: any) => any",
      des: "Change Dropdown item to save value to state elements of Dropdown.",
    },
    {
      name: "selected",
      type: "string",
      des: "selected is string state.",
    },
    {
      name: "width",
      type: "number",
      des: "Width of Dropdown container.",
    },
    {
      name: "fontSize",
      type: "number",
      des: "Text of font size of Dropdown.",
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
          width={180}
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
