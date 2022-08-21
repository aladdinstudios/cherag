import {
  Div,
  Text,
  IconButton,
  Button,
  COLORS,
  Card,
  Dropdown,
  DropdownItem,
  Alert,
  Avatar,
  Checkbox,
  CheckboxItem,
  Divider,
  Input,
  RadioButton,
  RadioButtonItem,
  Spinner,
  Switch,
  TextArea,
  SIZES,
} from "cherag-ui";
import type { NextPage } from "next";
import { useState } from "react";
import { StyleSheet } from "react-native";

const Home: NextPage = () => {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState([]);
  const [alert, setAlert] = useState(false);
  const [isSwitchCheck, setIsSwitchCheck] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <Div>
      <Text>Welcome to Cherag Docs!</Text>
      <IconButton color="red" onPress={(e) => alert(e)} icon="timeline-alert" />
      <Div style={styles.container}>
        <Text style={{ color: COLORS.black }} fontSize="md">
          Cherag-UI
        </Text>
        <Div bg={"gray"} w={0} h={0} p={0} m={0}>
          <Text>Div Commponent</Text>
        </Div>
        <Div style={styles.radioBtnGroup}>
          <RadioButton
            btnColor={COLORS.green}
            onChange={setSelectedRadio}
            selected={selectedRadio}
          >
            <RadioButtonItem value={1}>Radio button</RadioButtonItem>
            <RadioButtonItem value={2}>Radio button</RadioButtonItem>
          </RadioButton>
        </Div>
        <Spinner color={COLORS.green} size={"large"} />
        <Input
          onChangeText={setUserName}
          value={userName}
          placeholder="Enter name"
          leftIcon="lock"
          rightIcon="eye"
        />
        <Button
          bg={COLORS.softGray}
          color={COLORS.black}
          onPress={() => {
            console.log("Custom button pressed");
            setAlert(!alert);
          }}
        >
          Button
        </Button>

        <Alert status="warning" title="Item deleted !!!" />
        <Divider color={COLORS.darkGray} thickness={1} />

        <Dropdown
          onChange={setSelectItem}
          selected={selectItem}
          header=" Choose Service"
        >
          <DropdownItem value="item1">item1</DropdownItem>
          <DropdownItem value="item2">item2</DropdownItem>
          <DropdownItem value="item3">item3</DropdownItem>
        </Dropdown>
        {/* <Image
          w={120}
          h={120}
          size={10}
          source={require("./assets/aladdin.jpg")}
        />
        <Image
          w={120}
          h={120}
          size={10}
          source={{
            uri: "https://avatars.githubusercontent.com/u/6187401?v=4",
          }}
        /> */}
        <Card
          title="The Garden City"
          subTitle="The Silicon Valley of BD"
          category="Photo"
          footerText="6 mins ago"
        >
          'Bengaluru (also called Bangalore) is the center of BD high-tech
          industry. The city is also known for its parks and nightlife Bengaluru
          (also called Bangalore) is the center of BD high-tech industry. The
          city is also known for its parks and nightlife
        </Card>
        <IconButton
          icon="rocket"
          onPress={() => {
            console.log("Icon Button pressed");
          }}
          size={68}
          color={COLORS.green}
        />
        <Switch
          size="lg"
          isSwitchCheck={isSwitchCheck}
          setIsSwitchCheck={setIsSwitchCheck}
        />
        <Div style={styles.textAreaContainer}>
          <TextArea />
        </Div>
        {/* <Avatar.Image
          size={60}
          dotSize={20}
          dotColor={COLORS.green}
          source={require("./assets/alauddin.jpg")}
        /> */}
        <Avatar.Text
          bgColor={COLORS.orange}
          textColor={COLORS.white}
          size={60}
          label="XD"
        />
        <Avatar.Icon
          iconColor={COLORS.blue}
          bgColor={COLORS.lightGray}
          iconSize={35}
          icon="file"
        />
      </Div>
    </Div>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: SIZES.DimensionHeight * 2,
    marginTop: 30,
  },
  radioBtnGroup: {
    flexDirection: "row",
  },
  textAreaContainer: {
    marginTop: 30,
  },
});
