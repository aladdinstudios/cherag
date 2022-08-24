import { Avatar, Button, COLORS, Div } from "cherag-ui";
import { url } from "inspector";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import RenderAlertItem from "../../components/RenderAlertItem";
import { ProperticsProps } from "../../types/Propertics";
import { NextPageWithLayout } from "../_app";

export interface UsecaseArayObjProps {
  name: string;
  code: string;
}

const ButtonComponent: NextPageWithLayout = () => {
  let __propertics: ProperticsProps[] = [
    {
      name: "children",
      type: "",
      des: "Name of the button.",
    },
    {
      name: "onPress",
      type: "Function()",
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

  let __importCodeString = `import {Button} from 'cherag-ui'`;

  let __useCaseCodeStringArr: UsecaseArayObjProps[] = [
    {
      name: "Button",
      code: `
   <Button
      bg={COLORS.softGray}
      color={COLORS.black}
      onPress={() => {
      console.log('Custom button pressed');
    }}>
     Button
   </Button>`,
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderAlertItem
        componentName={"Button"}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <Div
          style={{
            flexDirection: "row",
          }}
        >
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
          </Button>
        </Div>
      </RenderAlertItem>
    </ScrollView>
  );
};

ButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default ButtonComponent;
