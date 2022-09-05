import { Alert, Div } from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  UsecaseArrayObjProps,
  ProperticsProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const AlertComponent: NextPageWithLayout = () => {
  const [alert, setAlert] = useState(true);

  let __componentName = "Alert";
  let __componentDescription =
    "Component for displaying messages, notifications, or other application state.";
  let __importCodeString = `import { Alert } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `   <Alert
      alert={alert}
      setAlert={setAlert}
      status="warning"
      title="Product add successfully"
    />`,
    },
    {
      name: "Example 2",
      code: `   <Alert
      alert={alert}
      setAlert={setAlert}
      status="success"
      title="Product add successfully"
    />`,
    },
    {
      name: "Example 3",
      code: `    <Alert
      alert={alert}
      setAlert={setAlert}
      status="error"
      title="Product add successfully"
    />`,
    },
    {
      name: "Example 4",
      code: `    <Alert
      alert={alert}
      setAlert={setAlert}
      status="info"
      title="Product add successfully"
    />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "title",
      type: "string",
      des: "Title of the alert.",
    },
    {
      name: "status",
      type: "'success' | 'error' | 'warning' | 'info'",
      des: "The status of the alert",
    },
    {
      name: "alert",
      type: "boolean",
      des: "Change state value",
    },
    {
      name: "setAlert",
      type: "(values: boolean) => boolean;",
      des: "setAlert update current alert state",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Alert"
        properticsOne={__properticsOne}
      >
        <Div style={{ justifyContent: "space-around", flex: 1 }}>
          <Alert
            alert={alert}
            setAlert={setAlert}
            status="warning"
            title="Product add successfully"
          />
          <Alert
            alert={alert}
            setAlert={setAlert}
            status="success"
            title="Product add successfully"
          />
          <Alert
            alert={alert}
            setAlert={setAlert}
            status="error"
            title="Product add successfully"
          />
          <Alert
            alert={alert}
            setAlert={setAlert}
            status="info"
            title="Product add successfully"
          />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

AlertComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default AlertComponent;
