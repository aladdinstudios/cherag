import { COLORS, Div, IconButton } from "cherag-ui";
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
  let __importCodeString = `import { IconButton, COLORS } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `   <IconButton
      icon="heart"
      onPress={() => {
        console.log("Test IconButton component");
      }}
      size={68}
      color={COLORS.red}
    />`,
    },
    {
      name: "Example 2",
      code: `   <IconButton
      icon="train-car"
      onPress={() => {
        console.log("Test IconButton component");
      }}
      size={68}
      color={COLORS.blue}
    />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
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
      type: "(event: GestureResponderEvent) => void",
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
        properticsOneTitle="IconButton propertics"
        properticsOne={__properticsOne}
      >
        <Div
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton
            icon="alarm-multiple"
            onPress={() => {
              console.log("Test IconButton component");
            }}
            size={68}
            color={COLORS.red}
          />
          <IconButton
            icon="alien-outline"
            onPress={() => {
              console.log("Test IconButton component");
            }}
            size={68}
            color={COLORS.blue}
          />
          <IconButton
            icon="rocket-outline"
            onPress={() => {
              console.log("Test IconButton component");
            }}
            size={68}
            color={COLORS.red}
          />
          <IconButton
            icon="train-car"
            onPress={() => {
              console.log("Test IconButton component");
            }}
            size={68}
            color={COLORS.blue}
          />
          <IconButton
            icon="heart"
            onPress={() => {
              console.log("Test IconButton component");
            }}
            size={68}
            color={COLORS.red}
          />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

IconButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default IconButtonComponent;
