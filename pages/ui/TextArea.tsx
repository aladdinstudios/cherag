import { COLORS, TextArea } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const TextAreaComponent: NextPageWithLayout = () => {
  let __componentName = "TextArea";
  let __componentDescription =
    "The Textarea component helps create multi-line text inputs.";
  let __importCodeString = `import { COLORS, TextArea } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `
    <TextArea
      borderRadious={15}
      borderWidth={1.5}
      h={150}
      numberOfLines={200}
      placeholder="Write your opinion"
      placeholderTextColor={COLORS.border}
      style={{ width: 300 }}
    />`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of TextArea.",
    },
    {
      name: "borderWidth",
      type: "number",
      des: "Border width of TextArea.",
    },
    {
      name: "borderRadious",
      type: "number",
      des: "Border radious of TextArea.",
    },
    {
      name: "h",
      type: "number",
      des: "Height of TextArea.",
    },
    {
      name: "placeholder",
      type: "string",
      des: "TextArea placeholder name.",
    },
    {
      name: "placeholderTextColor",
      type: "string",
      des: "Color of TextArea placeholder name.",
    },
    {
      name: "numberOfLines",
      type: "number",
      des: "Number of lines of TextArea",
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
        <TextArea
          borderRadious={15}
          borderWidth={1.5}
          h={150}
          numberOfLines={200}
          placeholder="Write your opinion"
          placeholderTextColor={COLORS.border}
          style={{ width: 300 }}
        />
      </RenderItem>
    </ScrollView>
  );
};

TextAreaComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default TextAreaComponent;
