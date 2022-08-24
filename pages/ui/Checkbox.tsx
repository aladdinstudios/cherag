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
  let __propertics: ProperticsProps[] = [
    {
      name: "title",
      type: "string",
      des: "Title of card.",
    },
    {
      name: "subTitle",
      type: "string",
      des: "Subtitle of card.",
    },
    {
      name: "footerText",
      type: "string",
      des: "Footer text of card.",
    },
    {
      name: "category",
      type: "string",
      des: "Name of the category.",
    },
    {
      name: "w",
      type: "number",
      des: "Image with of card.",
    },
    {
      name: "h",
      type: "number",
      des: "Image height of card.",
    },
    {
      name: "categoryBgColor",
      type: "string",
      des: "Category background color of card.",
    },
    {
      name: "children",
      type: "React.ReactNode | string",
      des: "Paragraph of card.",
    },
    {
      name: "titleStyle",
      type: "StyleProp<ViewStyle>",
      des: "Title style of card.",
    },
    {
      name: "subTitleStyle",
      type: "StyleProp<ViewStyle>",
      des: "Subtitle style of card.",
    },
    {
      name: "paragraphStyle",
      type: "StyleProp<ViewStyle>",
      des: "Paragraph style of card.",
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
