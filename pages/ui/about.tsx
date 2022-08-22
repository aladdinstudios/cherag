import { Div, Text } from "cherag-ui";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const About: NextPageWithLayout = () => {
  const codeString = ` 
  <Text>about page</Text>
  <Text>about page</Text>
  <Text>about page</Text>
  <Text>about page</Text>`;
  return (
    <Div>
      <Text>about page</Text>
      <Text>about page</Text>
      <Text>about page</Text>
      <Text>about page</Text>

      <SyntaxHighlighter language="dts" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </Div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
