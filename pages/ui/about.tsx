import { Div, Text } from "cherag-ui";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <Div>
      <Text>about page</Text>
    </Div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
