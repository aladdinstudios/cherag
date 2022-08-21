import { Div, Text, IconButton } from "cherag-ui";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Div>
      <Text>Welcome to Cherag Docs!</Text>
      <IconButton color="red" onPress={(e) => alert(e)} icon="timeline-alert" />
    </Div>
  );
};

export default Home;
