import { Button, COLORS } from "cherag-ui";
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
      name: "",
      code: `
    <Button
      bg={COLORS.lightGray7}
      color={COLORS.errorIcon}
      width={300}
      height={50}
      borderWidth={1}
      borderRadius={10}
      style={{
        justifyContent: "center",
        borderColor: COLORS.lightPrimary,
      }}
      onPress={() => {
        console.log("Button component pressed");
      }}
    >
      Button
    </Button>`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "children",
      type: "React.ReactNode",
      des: "Name of the button.",
    },
    {
      name: "onPress",
      type: "(values:any)=> any",
      des: "Providing button onPress Action.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Button.",
    },
    {
      name: "width",
      type: "number",
      des: "With of button.",
    },
    {
      name: "height",
      type: "number",
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
        <Button
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
        </Button>
        <Button
          bg={COLORS.border}
          color={COLORS.white}
          w={"20%"}
          h={"10%"}
          borderWidth={1}
          style={{
            justifyContent: "center",
            borderColor: COLORS.lightPrimary,
            marginVertical: 15,
          }}
          onPress={() => {
            console.log("Button component pressed");
          }}
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
          onPress={() => console.log("Button component test")}
          style={{
            justifyContent: "center",
            borderColor: COLORS.lightPrimary,
            marginBottom: 15,
          }}
        >
          Add product
        </Button>
        <Button
          w={"10%"}
          h={"10%"}
          borderRadius={5}
          fontSize={12}
          bg={COLORS.errorIcon}
          color={COLORS.white}
          onPress={() => console.log("Button component test")}
        >
          Submit
        </Button>
      </RenderItem>
    </ScrollView>
  );
};

ButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default ButtonComponent;
