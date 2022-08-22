import { Div, Text } from "cherag-ui";
import { NextPage } from "next";
import { ScrollView } from "react-native";
import { Sidebar } from "../../components/Sidebar";

const Ui: NextPage = () => {
  return (
    <Div style={{ flex: 1, flexDirection: "row" }}>
      <Div style={{ width: "20%", padding: 20 }}>
        <ScrollView>
          <Sidebar>Alert</Sidebar>
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
        </ScrollView>
      </Div>

      <Div>
        {/* <Text style={{ justifyContent: "space-evenly" }}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text> */}
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
      </Div>
    </Div>
  );
};

export default Ui;
