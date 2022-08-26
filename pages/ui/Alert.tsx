import { Alert } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  UsecaseArrayObjProps,
  ProperticsProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const AlertComponent: NextPageWithLayout = () => {
  let __componentName = "Alert";
  let __componentDescription =
    "Component for displaying messages, notifications, or other application state.";
  let __importCodeString = `import { Alert } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `<Alert status="success" title="Product add Successfully" />`,
    },
  ];
  let __propertics: ProperticsProps[] = [
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
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <Alert status="success" title="Product add Successfully" />
      </RenderItem>
    </ScrollView>
  );
};

AlertComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default AlertComponent;
