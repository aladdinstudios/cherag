import { COLORS, Div, TextArea } from "cherag-ui";
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
      name: "Example 1",
      code: `    <TextArea
      borderRadious={15}
      borderWidth={1.5}
      numberOfLines={10}
      placeholder="Write your opinion"
      placeholderTextColor={COLORS.border}
      w="40%"
    />`,
    },
    {
      name: "Example 2",
      code: `    <TextArea
      borderRadious={15}
      borderWidth={1.5}
      numberOfLines={4}
      placeholder="Write your opinion"
      placeholderTextColor={COLORS.border}
      w="30%"
    />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
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
      name: "borderColor",
      type: "string",
      des: "Border color of TextArea.",
    },
    {
      name: "w",
      type: "string",
      des: "Width of TextArea.",
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
        properticsOneTitle="TextArea Propertics"
        properticsOne={__properticsOne}
      >
        <TextArea
          borderRadious={15}
          borderWidth={1.5}
          numberOfLines={10}
          placeholder="Write your opinion"
          placeholderTextColor={COLORS.border}
          w="40%"
          style={{ marginBottom: 10 }}
        />
        <TextArea
          borderRadious={15}
          borderWidth={1.5}
          numberOfLines={4}
          placeholder="Write your opinion"
          placeholderTextColor={COLORS.border}
          w="30%"
        />
      </RenderItem>
    </ScrollView>
  );
};

TextAreaComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default TextAreaComponent;
