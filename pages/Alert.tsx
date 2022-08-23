import { Alert, Text } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../components/Layout";
import { RenderItem } from "../components/RenderItem";
import { NextPageWithLayout } from "./_app";

export interface ProperticsProps {
  name: string;
  type: string;
  des: string;
}

const About: NextPageWithLayout = () => {
  let object: ProperticsProps[] = [
    {
      name: "name",
      type: "string",
      des: "Type of component, Component colors.Type of component.Type of component, Component colors.Type of component.Type of component, Component colors.Type of component.Type of component, Component colors.Type of component.",
    },
    {
      name: "title",
      type: "string",
      des: "Title of the Alert component",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={"Alart"}
        importCodeString={`import {Alert} from 'cherag-ui'`}
        useCaseCodeString={`<Alert status="warning" title="Item deleted !!!" />`}
        propertics={object}
      >
        <Alert status="success" title="Product add Successfully" />
      </RenderItem>
    </ScrollView>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
