import { Button, COLORS, Div, Text } from "cherag-ui";
import Link from "next/link";
import { ScrollView } from "react-native";
import Sidebar from "./Sidebar";

const Wrapper = () => {
  return (
    <Div
      style={{
        paddingLeft: "5%",
      }}
    >
      <Div
        style={{
          marginVertical: "25%",
        }}
      >
        <Link href={`/ui`} passHref>
          <Button
            w="100"
            bg={COLORS.white}
            fontSize={28}
            color={COLORS.errorIcon}
          >
            Components
          </Button>
        </Link>
      </Div>
      <ScrollView>
        <Sidebar>Alert</Sidebar>
        <Sidebar>Avatar</Sidebar>
        <Sidebar>Button</Sidebar>
        <Sidebar>Card</Sidebar>
        <Sidebar>Checkbox</Sidebar>
        <Sidebar>Div</Sidebar>
        <Sidebar>Divider</Sidebar>
        <Sidebar>Dropdown</Sidebar>
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
  );
};

export default Wrapper;
