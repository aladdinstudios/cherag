import { Alert, COLORS, Div, Divider, Text } from "cherag-ui";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ScrollView } from "react-native";
import { ProjectColor } from "../../theme";
import { RenderItem } from "../../components/RenderItem";

const About: NextPageWithLayout = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem />
    </ScrollView>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
