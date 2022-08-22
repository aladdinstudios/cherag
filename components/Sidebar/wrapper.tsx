import { Div } from "cherag-ui";
import Link from "next/link";
import { ScrollView } from "react-native";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Wrapper = () => {
  const router = useRouter();
  return (
    <Div style={{ width: "20%", padding: 20 }}>
      <ScrollView>
        <Link href="ui/pages/about.js">
          <Sidebar onPress={() => router.push("/ui/about")}>Alert</Sidebar>
        </Link>
        <Sidebar>Avatar</Sidebar>
        <Sidebar>Button</Sidebar>
        <Sidebar>Card</Sidebar>
        <Sidebar>Checkbox</Sidebar>
        <Sidebar>Card</Sidebar>
        <Sidebar>Div</Sidebar>
        <Sidebar>Divider</Sidebar>
        <Sidebar>Card</Sidebar>
        <Sidebar>Dropdown</Sidebar>
        <Sidebar>Divider</Sidebar>
        <Sidebar>IconButton</Sidebar>
        <Sidebar>Image</Sidebar>
        <Sidebar>Input</Sidebar>
        <Sidebar>RadioButton</Sidebar>
        <Sidebar>Spinner</Sidebar>
        <Sidebar>Switch</Sidebar>
        <Sidebar>Text</Sidebar>
        <Sidebar>TextArea</Sidebar>
        <Sidebar>TextArea</Sidebar>
        <Sidebar>TextArea</Sidebar>
        <Sidebar>TextArea</Sidebar>
        <Sidebar>TextArea</Sidebar>
        <Sidebar>TextArea</Sidebar>
      </ScrollView>
    </Div>
  );
};

export default Wrapper;
