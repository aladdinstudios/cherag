import { Checkbox, CheckboxItem, CheckboxValue } from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import RenderAlertItem from "../../components/RenderAlertItem";
import { ProperticsProps } from "../../types/Propertics";
import { NextPageWithLayout } from "../_app";

export interface UsecaseArayObjProps {
  name: string;
  code: string;
}

const CheckboxComponent: NextPageWithLayout = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  let __componentDescription =
    "Checkboxes allow the selection of multiple options from various childred.";
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

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderAlertItem
        componentName={"Checkbox"}
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
      </RenderAlertItem>
    </ScrollView>
  );
};

CheckboxComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default CheckboxComponent;
