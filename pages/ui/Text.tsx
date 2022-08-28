import { Button, COLORS, Text } from "cherag-ui";
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
  let __importCodeString = `import { Text } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `
    <Text style={{ color: COLORS.red }} fontSize="3xl">
      Cherag-ui
    </Text>`,
    },
  ];
  let __propertics: ProperticsProps[] = [
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
      type: "string",
      des: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
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
        <Text style={{ color: COLORS.red }} fontSize="3xl">
          Cherag-ui
        </Text>
      </RenderItem>
    </ScrollView>
  );
};

TextComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default TextComponent;
