import { Alert, COLORS, Div, Divider, Text } from "cherag-ui";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ScrollView } from "react-native";
import { ProjectColor } from "../../theme";

const About: NextPageWithLayout = () => {
  const importCodeString = `import {Alert} from 'cherag-ui'`;
  const useCaseCodeString = `<Alert status="warning" title="Item deleted !!!" />`;

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Div style={{ marginTop: 80, marginLeft: 80, height: "auto" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
          Alert
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Component for displaying messages, notifications, or other application
          state.
        </Text>

        <SyntaxHighlighter language="tsx" style={docco}>
          {importCodeString}
        </SyntaxHighlighter>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 20 }}>
          Usage
        </Text>
        <SyntaxHighlighter language="tsx" style={docco}>
          {useCaseCodeString}
        </SyntaxHighlighter>

        <Div
          style={{
            marginTop: 30,
            backgroundColor: COLORS.lightGray5,
            width: "100%",
            height: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Alert status="success" title="Product add Successfully" />
        </Div>

        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 20 }}>
          Props
        </Text>
        <Div style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", width: 100 }}>Name</Text>
          <Text style={{ fontWeight: "bold", width: 100 }}>Type</Text>
          <Text style={{ fontWeight: "bold" }}>Description</Text>
        </Div>
        <Divider
          thickness={1}
          color={ProjectColor.border}
          style={{
            marginVertical: 10,
          }}
        />
        <Div
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ width: 100 }}>Status</Text>
          <Text style={{ width: 100 }}>String</Text>
          <Text>Type of component, Component colors.</Text>
        </Div>
        <Divider
          thickness={1}
          color={ProjectColor.border}
          style={{
            marginVertical: 10,
          }}
        />
        <Div style={{ flexDirection: "row" }}>
          <Text style={{ width: 100 }}>Title</Text>
          <Text style={{ width: 100 }}>String</Text>
          <Text>Title of the Alert component.</Text>
        </Div>

        <Divider
          thickness={1}
          color={ProjectColor.border}
          style={{
            marginVertical: 10,
          }}
        />
      </Div>
    </ScrollView>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
