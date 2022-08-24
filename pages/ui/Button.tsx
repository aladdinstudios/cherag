import { Text } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const ButtonComponent: NextPageWithLayout = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Text>ButtonComponent</Text>
    </ScrollView>
  );
};

ButtonComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default ButtonComponent;
