import { Button, COLORS, Div, Text } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const TextComponent: NextPageWithLayout = () => {
  let __componentName = "Text";
  let __componentDescription =
    "A component for displaying text, supports nesting, styling.";
  let __importCodeString = `import { Text, fontSizeProps } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `   <Text style={{ color: COLORS.red }} fontSize="3xl">
      Cherag-ui
    </Text>`,
    },
    {
      name: "Example 2",
      code: `    <Text style={{ color: COLORS.green }} fontSize="2xl">
      Cherag-ui
    </Text>`,
    },
    {
      name: "Example 3",
      code: `    <Text style={{ color: COLORS.blue }} fontSize="4xl">
      Cherag-ui
    </Text>`,
    },
    {
      name: "Example 4",
      code: `    <Text style={{ color: COLORS.black }} fontSize="lg">
      Cherag-ui
    </Text>`,
    },
    {
      name: "Example 5",
      code: `    <Text style={{ color: COLORS.sayn }} fontSize="sm">
      Cherag-ui
    </Text>`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of Text.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Button.",
    },
    {
      name: "fontSize",
      type: "fontSizeProps",
      des: "sm | md | lg | xl | 2xl | 3xl | 4xl",
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Text Propertics"
        properticsOne={__properticsOne}
      >
        <Div
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.red }} fontSize="3xl">
            Cherag-ui
          </Text>
          <Text style={{ color: COLORS.black }} fontSize="2xl">
            Cherag-ui
          </Text>
          <Text style={{ color: COLORS.lightGray2 }} fontSize="lg">
            Cherag-ui
          </Text>
          <Text style={{ color: COLORS.sayn }} fontSize="sm">
            Cherag-ui
          </Text>
          <Text style={{ color: COLORS.yellow }} fontSize="md">
            Cherag-ui
          </Text>
          <Text style={{ color: COLORS.success }} fontSize="xl">
            Cherag-ui
          </Text>
          <Text style={{ color: COLORS.blue }} fontSize="4xl">
            Cherag-ui
          </Text>
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

TextComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default TextComponent;
