import { COLORS, Div, Dropdown, DropdownItem } from "cherag-ui";
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
      code: `  import { COLORS, Div, Dropdown, DropdownItem } from "cherag-ui";

  export default function App() {
    const [selectItem, setSelectItem] = useState<string>();
    return (
      <Dropdown
        onChange={setSelectItem}
        selected={selectItem}
        header="Choose your service"
        w={'50%'}
        borderColor={COLORS.softGray}
      >
        <DropdownItem value="Audio device">Audio device</DropdownItem>
        <DropdownItem value="Video device">Video device</DropdownItem>
        <DropdownItem value="Wifi device">Wifi device</DropdownItem>
      </Dropdown>
    );
  };
      `,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of Dropdown.",
    },
    {
      name: "onChange",
      type: "(event: GestureResponderEvent) => void",
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
        properticsOneTitle="Dropdown propertics"
        properticsOne={__properticsOne}
      >
        <Div
          style={{
            width: 400,
            height: 30,
          }}
        >
          <Dropdown
            onChange={setSelectItem}
            selected={selectItem}
            header="Choose your service"
            w="50%"
            h="90%"
            borderColor={COLORS.softGray}
          >
            <Div
              style={{
                top: 15,
                backgroundColor: COLORS.transparentWhite,
              }}
            >
              <DropdownItem value="Audio device">Audio device</DropdownItem>
              <DropdownItem value="Video device">Video device</DropdownItem>
              <DropdownItem value="Wifi device">Wifi device</DropdownItem>
            </Div>
          </Dropdown>
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

DropdownComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default DropdownComponent;
