import { Alert } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import RenderAlertItem from "../../components/RenderAlertItem";
import { ProperticsProps } from "../../types/Propertics";
import { NextPageWithLayout } from "../_app";

export interface UsecaseArayObjProps {
  name: string;
  code: string;
}
const AlertComponent: NextPageWithLayout = () => {
  let __componentName = "Alert";
  let __componentDescription =
    "Component for displaying messages, notifications, or other application state.";
  let __importCodeString = `import { Alert } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArayObjProps[] = [
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
      <RenderAlertItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <Alert status="success" title="Product add Successfully" />
      </RenderAlertItem>
    </ScrollView>
  );
};

AlertComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default AlertComponent;
