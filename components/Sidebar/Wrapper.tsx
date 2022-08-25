import { Div } from "cherag-ui";
import { ScrollView } from "react-native";
import Sidebar from "./Sidebar";

const Wrapper = () => {
  return (
    <Div style={{ width: "20%", padding: 20 }}>
      <ScrollView>
        <Sidebar>Alert</Sidebar>
        <Sidebar>Avatar</Sidebar>
        <Sidebar>Button</Sidebar>
        <Sidebar>Card</Sidebar>
        <Sidebar>Checkbox</Sidebar>
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
