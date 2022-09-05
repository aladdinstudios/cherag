import { Checkbox, CheckboxItem, CheckboxValue, COLORS } from "cherag-ui";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const CheckboxComponent: NextPageWithLayout = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);

  let __componentName = "Checkbox";
  let __componentDescription =
    "Checkboxes allow the selection of multiple options from various childred.";
  let __importCodeString = `import { Checkbox, CheckboxItem, CheckboxValue } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `   render{
      const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
      return(
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="1">
            Checkbox item 1
          </CheckboxItem>
          <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="2">
            Checkbox item 2
          </CheckboxItem>
          <CheckboxItem iconSize={22} textStyle={styles.checkboxText} value="3">
            Checkbox item 3
          </CheckboxItem>
        </Checkbox>
        );
    };`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "values",
      type: "CheckboxValues",
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
  let __properticsTwo: ProperticsProps[] = [
    {
      name: "value",
      type: "CheckboxValue",
      des: "Selected items of checkbox.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of checkbox.",
    },
    {
      name: "iconSize",
      type: "number",
      des: "Size of checkbox icon.",
    },
    {
      name: "textStyle",
      type: "StyleProp<ViewStyle>",
      des: "style of card container.",
    },
    {
      name: "checkedIconColor",
      type: "string",
      des: "Checked icon color of checkbox.",
    },
    {
      name: "uncheckedIconColor",
      type: "string",
      des: "Unchecked icon color of checkbox.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Checkbox"
        properticsOne={__properticsOne}
        properticsTwoTitle="CheckboxItem"
        properticsTwo={__properticsTwo}
      >
        <Checkbox values={checkboxes} onChange={setCheckboxes}>
          <CheckboxItem
            iconSize={22}
            checkedIconColor={COLORS.red}
            textStyle={styles.checkboxText}
            value="1"
          >
            Checkbox item 1
          </CheckboxItem>
          <CheckboxItem
            iconSize={22}
            checkedIconColor={COLORS.red}
            textStyle={styles.checkboxText}
            value="2"
          >
            Checkbox item 2
          </CheckboxItem>
          <CheckboxItem
            iconSize={22}
            checkedIconColor={COLORS.red}
            textStyle={styles.checkboxText}
            value="3"
          >
            Checkbox item 3
          </CheckboxItem>
        </Checkbox>
      </RenderItem>
    </ScrollView>
  );
};

CheckboxComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default CheckboxComponent;

const styles = StyleSheet.create({
  checkboxText: {
    fontSize: 16,
  },
});
