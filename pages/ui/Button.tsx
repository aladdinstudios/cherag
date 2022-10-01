import { Button, COLORS, Div } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const ButtonComponent: NextPageWithLayout = () => {
  let __componentName = "Button";
  let __componentDescription =
    "The Button component triggers an event or an action. Examples can be submitting forms and deleting, update, add a data point.";
  let __importCodeString = `import { Button } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `   <Button
      w={"20%"}
      h={"10%"}
      bg={COLORS.primary}
      color={COLORS.white}
      borderRadius={10}
      onPress={() => {
        console.log("Button component test");
      }}
    >
      Button component
    </Button>`,
    },
    {
      name: "Example 2",
      code: `   <Button
      w={"20%"}
      h={"10%"}
      borderRadius={5}
      fontSize={18}
      bg={COLORS.blue}
      color={COLORS.white}
      onPress={() => console.log("Button component test")}
      style={{
        justifyContent: "center",
        borderColor: COLORS.lightPrimary,
        marginBottom: 15,
      }}
    >
      Add product
    </Button>`,
    },
    {
      name: "Example 3",
      code: `   <Button
      w={"10%"}
      h={"10%"}
      borderRadius={5}
      fontSize={12}
      bg={COLORS.errorIcon}
      color={COLORS.white}
      onPress={() => console.log("Button component test")}
    >
      Submit
    </Button>`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Name of the button.",
    },
    {
      name: "onPress",
      type: "(event: GestureResponderEvent) => void",
      des: "Providing button onPress Action.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Button.",
    },
    {
      name: "w",
      type: "string",
      des: "Width of button.",
    },
    {
      name: "h",
      type: "string",
      des: "Height of button.",
    },
    {
      name: "bg",
      type: "string",
      des: "Background color of button.",
    },
    {
      name: "color",
      type: "string",
      des: "Button text color.",
    },
    {
      name: "fontSize",
      type: "number",
      des: "Font size color of button.",
    },
    {
      name: "fontWeight",
      type: "string",
      des: "Font weight of button text.",
    },
    {
      name: "borderRadius",
      type: "number",
      des: "Border radius of button outerline.",
    },
    {
      name: "borderWidth",
      type: "number",
      des: "thickness of border.",
    },
    {
      name: "fontWeight",
      type: `TextStyle['fontWeight']`,
      des: "fontWeight of Button text.",
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Button"
        properticsOne={__properticsOne}
      >
        <Button
          w={"20%"}
          h={"10%"}
          bg={COLORS.primary}
          color={COLORS.white}
          onPress={() => console.log("test button component")}
        >
          Button component
        </Button>
        <Button
          bg={COLORS.blackish}
          color={COLORS.white}
          w={"20%"}
          h={"10%"}
          borderWidth={1}
          fontSize={16}
          style={{
            justifyContent: "center",
            borderColor: COLORS.errorIcon,
            marginVertical: 15,
          }}
          onPress={() => console.log("test button component")}
        >
          Button
        </Button>
        <Button
          w={"20%"}
          h={"10%"}
          borderRadius={5}
          fontSize={18}
          bg={COLORS.blue}
          color={COLORS.white}
          onPress={() => console.log("test button component")}
          style={{
            justifyContent: "center",
            borderColor: COLORS.lightPrimary,
            marginBottom: 15,
          }}
        >
          Add product
        </Button>
        <Button
          w={"20%"}
          h={"10%"}
          borderRadius={5}
          fontSize={16}
          bg={COLORS.errorIcon}
          color={COLORS.white}
          onPress={() => console.log("test button component")}
        >
          Submit
        </Button>
      </RenderItem>
    </ScrollView>
  );
};

ButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default ButtonComponent;
