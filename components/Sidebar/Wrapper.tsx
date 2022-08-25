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
        <Sidebar onPress={() => router.push("/ui/Alert")}>Alert</Sidebar>
        <Sidebar onPress={() => router.push("/ui/Avatar")}>Avatar</Sidebar>
        <Sidebar onPress={() => router.push("/ui/Button")}>Button</Sidebar>
        <Sidebar onPress={() => router.push("/ui/Card")}>Card</Sidebar>
        <Sidebar onPress={() => router.push("/ui/Checkbox")}>Checkbox</Sidebar>
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
