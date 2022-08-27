import { COLORS, IconButton } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const IconButtonComponent: NextPageWithLayout = () => {
  let __componentName = "IconButton";
  let __componentDescription =
    "Use the IconButton as like Button component without text.";
  let __importCodeString = `import { IconButton } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `
    <IconButton
      icon="rocket"
      onPress={() => {
        console.log("Icon Button pressed");
      }}
      size={68}
      color={COLORS.red}
    />`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of IconButton.",
    },
    {
      name: "icon",
      type: "string",
      des: "Name of icon, import from React-Native-Vector-Icon/MaterialCommunityIcons.",
    },
    {
      name: "color",
      type: "string",
      des: "Color of the IconButton.",
    },
    {
      name: "size",
      type: "number",
      des: "Size of the IconButton.",
    },
    {
      name: "disabled",
      type: "boolean",
      des: "Disable the IconButton.",
    },
    {
      name: "onPress",
      type: "(values: any) => any",
      des: "Make an action of IconButton.",
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
        <IconButton
          icon="rocket"
          onPress={() => {
            console.log("Test IconButton component");
          }}
          size={68}
          color={COLORS.red}
        />
      </RenderItem>
    </ScrollView>
  );
};

IconButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default IconButtonComponent;
