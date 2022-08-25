import { Checkbox, CheckboxItem, CheckboxValue } from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const CheckboxComponent: NextPageWithLayout = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);

  let __componentName = "Checkbox";
  let __componentDescription =
    "Checkboxes allow the selection of multiple options from various childred.";
  let __importCodeString = `import { Checkbox, CheckboxItem, CheckboxValue } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArayObjProps[] = [
    {
      name: "",
      code: `
    render{
        const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
      return(
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
            <CheckboxItem value="1">Checkbox 1</CheckboxItem>
            <CheckboxItem value="2">Checkbox 2</CheckboxItem>
            <CheckboxItem value="3">Checkbox 3</CheckboxItem>
        </Checkbox>
        );
    };`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "values",
      type: "string[]",
      des: "Selected items of checkbox.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of checkbox.",
    },
    {
      name: "onChange",
      type: "(values: any) => any",
      des: "The callback return when any children Checkbox is checked or unchecked..",
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
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem value="1">Checkbox 1</CheckboxItem>
          <CheckboxItem value="2">Checkbox 2</CheckboxItem>
          <CheckboxItem value="3">Checkbox 3</CheckboxItem>
        </Checkbox>
      </RenderItem>
    </ScrollView>
  );
};

CheckboxComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default CheckboxComponent;
