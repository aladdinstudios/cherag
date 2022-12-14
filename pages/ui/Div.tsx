import { COLORS, Div, Text } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const DivComponent: NextPageWithLayout = () => {
  let __componentName = "Div";
  let __componentDescription =
    "Use the Div component as a layout primitive to add margin, padding, and colors to content.";
  let __importCodeString = `import { COLORS, Div, Text } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `
    <Div
      bg={COLORS.errorIcon}
      w={200}
      h={100}
      p={10}
      m={10}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        fontSize="xl"
        style={{
          color: COLORS.white,
        }}
      >
        Div Commponent
      </Text>
    </Div>`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of Div.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Div.",
    },
    {
      name: "bg",
      type: "string",
      des: "Background color of Div.",
    },
    {
      name: "w",
      type: "number",
      des: "Width of Div.",
    },
    {
      name: "h",
      type: "number",
      des: "Height of Div.",
    },
    {
      name: "p",
      type: "number",
      des: "Padding of Div.",
    },
    {
      name: "m",
      type: "number",
      des: "Margin of Div.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Div propertics"
        properticsOne={__properticsOne}
      >
        <Div
          bg={COLORS.errorIcon}
          w={200}
          h={100}
          p={10}
          m={10}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            fontSize="xl"
            style={{
              color: COLORS.white,
            }}
          >
            Div Commponent
          </Text>
        </Div>
        <Div
          bg={COLORS.border}
          w={400}
          h={100}
          p={10}
          m={10}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            fontSize="xl"
            style={{
              color: COLORS.white,
            }}
          >
            Div Commponent
          </Text>
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

DivComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default DivComponent;
