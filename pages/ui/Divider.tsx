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
      name: "",
      code: `
    <Div style={{ width: "35%" }}>
      <Divider color={COLORS.darkGray} thickness={2} />
    </Div>`,
    },
  ];
  let __propertics: ProperticsProps[] = [
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
        <Div style={{ width: "35%" }}>
          <Divider color={COLORS.darkGray} thickness={2} />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

DividerComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default DividerComponent;
