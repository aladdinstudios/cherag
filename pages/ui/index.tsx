import { Button, COLORS, Div, SIZES, Text } from "cherag-ui";
import { NextPage } from "next";
import { ScrollView } from "react-native";
import { Sidebar } from "../../components/Sidebar";

const Ui: NextPage = () => {
  return (
    <Div
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
    >
      <Div style={{ width: SIZES.DimensionWidth / 5, padding: 20 }}>
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
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
        <Text>Welcome to Cherag UI!</Text>
      </Div>
    </Div>
  );
};

export default Ui;
