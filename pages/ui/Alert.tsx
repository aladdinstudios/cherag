import { Alert, Text } from "cherag-ui";
import { ScrollView } from "react-native";
import { RenderItem } from "../../components/RenderItem";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import { ProperticsProps } from "../../types/Propertics";

const AlertComponent: NextPageWithLayout = () => {
  let object: ProperticsProps[] = [
    {
      name: "title",
      type: "string",
      des: "Title of the alert.",
    },
    {
      name: "status",
      type: "string",
      des: "The status of the alert",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={"Alert"}
        importCodeString={`import {Alert} from 'cherag-ui'`}
        useCaseCodeString={`<Alert status="warning" title="Product add successfully" />`}
        propertics={object}
      >
        <Alert status="success" title="Product add Successfully" />
      </RenderItem>
    </ScrollView>
  );
};

AlertComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default AlertComponent;
