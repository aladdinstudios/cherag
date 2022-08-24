import { Avatar, COLORS, Div } from "cherag-ui";
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
const AvatarComponent: NextPageWithLayout = () => {
  let __propertics: ProperticsProps[] = [
    {
      name: "dotSize",
      type: "number",
      des: "For providing props to resize active dot inside Avatar Image.",
    },
    {
      name: "dotColor",
      type: "string",
      des: "For providing props to chage active dot color inside Avatar Image.",
    },
    {
      name: "size",
      type: "number",
      des: "Size of Avatar.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Cherag-ui has default style, could change custom style.",
    },
    {
      name: "imageStyle",
      type: "StyleProp<ViewStyle>",
      des: "For providing props to styling Image component inside Avatar.",
    },
  ];

  let __importCodeString = `import {Avatar} from 'cherag-ui'`;

  let __useCaseCodeStringArr: UsecaseArayObjProps[] = [
    {
      name: "Avatar.Image",
      code: `
  <Avatar.Image
    size={60}
    dotSize={20}
    dotColor={COLORS.green}
    source={require('./assets/alauddin.jpg')}
  />`,
    },
    {
      name: "Avatar.Icon",
      code: `
  <Avatar.Icon
    iconColor={COLORS.blue}
    bgColor={COLORS.lightGray}
    iconSize={35}
    icon="file"
  />`,
    },
    {
      name: "Avatar.Text",
      code: `
  <Avatar.Text
    bgColor={COLORS.orange}
    textColor={COLORS.white}
    size={60}
    label="XD"
  />`,
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderAlertItem
        componentName={"Avatar"}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <Div
          style={{
            flexDirection: "row",
          }}
        >
          <Avatar.Image
            size={60}
            dotSize={20}
            dotColor={COLORS.green}
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <Avatar.Icon
            style={{ paddingTop: 10 }}
            iconColor={COLORS.red}
            bgColor={COLORS.lightGray}
            iconSize={35}
            icon="heart"
          />
          <Avatar.Text
            style={{ paddingTop: 20 }}
            bgColor={COLORS.border}
            textColor={COLORS.white}
            size={60}
            label="XD"
          />
        </Div>
      </RenderAlertItem>
    </ScrollView>
  );
};

AvatarComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default AvatarComponent;
