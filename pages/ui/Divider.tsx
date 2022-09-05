import { COLORS, Div, Divider } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const DividerComponent: NextPageWithLayout = () => {
  let __componentName = "Divider";
  let __componentDescription =
    "Divider can visually separate content in a given text, list or group.";
  let __importCodeString = `import { Divider } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `  <Divider w={400} color={COLORS.blue} thickness={2} />`,
    },
    {
      name: "Example 2",
      code: `  <Divider w={400} color={COLORS.green} thickness={3} />`,
    },
    {
      name: "Example 3",
      code: `  <Divider w={400} color={COLORS.red} thickness={5} />`,
    },
    {
      name: "Example 4",
      code: `  <Divider w={400} color={COLORS.darkGray} thickness={10} />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Divider.",
    },
    {
      name: "thickness",
      type: "number",
      des: "thickness of Divider.",
    },
    {
      name: "color",
      type: "string",
      des: "Color of Divider.",
    },
    {
      name: "w",
      type: "number",
      des: "Width of Divider.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Avatar"
        properticsOne={__properticsOne}
      >
        <Div
          style={{
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <Divider w={400} color={COLORS.yellow} thickness={1} />
          <Divider w={400} color={COLORS.blue} thickness={2} />
          <Divider w={400} color={COLORS.green} thickness={3} />
          <Divider w={400} color={COLORS.red} thickness={5} />
          <Divider w={400} color={COLORS.darkGray} thickness={10} />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

DividerComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default DividerComponent;
