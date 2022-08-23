import { Alert } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import { NextPageWithLayout } from "../_app";

const About: NextPageWithLayout = () => {
  const obj = {
    obj1: {
      name: "name",
      type: "string",
      des: "Type of component, Component colors.Type of component, Component",
    },
    obj2: {
      name: "title",
      type: "string",
      des: "Title of the Alert component",
    },
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={"Alart"}
        importCodeString={`import {Alert} from 'cherag-ui'`}
        useCaseCodeString={`<Alert status="warning" title="Item deleted !!!" />`}
        obj={obj}
      >
        <Alert status="success" title="Product add Successfully" />
      </RenderItem>
    </ScrollView>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
