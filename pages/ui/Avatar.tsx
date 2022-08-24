import { Avatar, COLORS, Div } from "cherag-ui";
import { url } from "inspector";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import RenderAlertItem from "../../components/RenderAlertItem";
import { ProperticsProps } from "../../types/Propertics";
import { NextPageWithLayout } from "../_app";

export interface useCaseArayObjProps {
  name: string;
  code: string;
}
const AvatarComponent: NextPageWithLayout = () => {
  let __propertics: ProperticsProps[] = [
    {
      name: "name",
      type: "string",
      des: "Type of component, Component colors.Type of component.",
    },
    {
      name: "title",
      type: "string",
      des: "Title of the Alert component",
    },
  ];

  let __importCodeString = `import {Avatar} from 'cherag-ui'`;

  let __useCaseCodeStringArr: useCaseArayObjProps[] = [
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
        useCaseCodeStringArr={__useCaseCodeStringArr}
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
          <Avatar.Text
            style={{ paddingTop: 20 }}
            bgColor={COLORS.border}
            textColor={COLORS.white}
            size={60}
            label="XD"
          />
          <Avatar.Icon
            style={{ paddingTop: 10 }}
            iconColor={COLORS.red}
            bgColor={COLORS.lightGray}
            iconSize={35}
            icon="heart"
          />
        </Div>
      </RenderAlertItem>
    </ScrollView>
  );
};

AvatarComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default AvatarComponent;
