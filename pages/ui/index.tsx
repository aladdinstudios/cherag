import { Button, COLORS, Div, Text } from "cherag-ui";
import Link from "next/link";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ScrollView } from "react-native";

const Ui: NextPageWithLayout = () => {
  const exampleComponent = `import {
      Button,
      Checkbox,
      CheckboxItem,
      CheckboxValue,
      COLORS,
      Div,
      Input,
      RadioButton,
      RadioButtonItem,
      RadioButtonValue,
      SIZES,
      Spinner,
      Text,
    } from 'cherag-ui';
    import React, { useState } from 'react';
    import { StyleSheet } from 'react-native';

    export default function App() {
      const [userName, setUserName] = useState<string>();
      const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
      const [selectedRadio, setSelectedRadio] = useState<RadioButtonValue>(1);

      return (
          <Div style={styles.container}>
            <Text style={{ color: COLORS.black }} fontSize="md">
              Cherag-UI
            </Text>
            <Div bg={'gray'} w={0} h={0} p={0} m={0}>
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
            <Checkbox values={checkboxes} onChange={setCheckboxes}>
              <CheckboxItem value="1">Checkbox 1</CheckboxItem>
              <CheckboxItem value="2">Checkbox 2</CheckboxItem>
              <CheckboxItem value="3">Checkbox 3</CheckboxItem>
            </Checkbox>
            <Spinner color={COLORS.green} size={'large'} />
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
                console.log('Button pressed');
              }}
            >
              Button
            </Button>
          </Div>
      );
    }

    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: SIZES.DimensionHeight * 2,
        marginTop: 30,
      },
      radioBtnGroup: {
        flexDirection: 'row',
      },
    });`;
  return (
    <ScrollView>
      <Div style={{ width: "37%", marginVertical: 50 }}>
        <Text fontSize="4xl">
          Cross-platform Cherag UI design for React Native.
        </Text>
        <Text style={{ marginVertical: 30, textAlign: "justify" }}>
          Cherag UI is a library for creating easy to use for user
          interfaces.Use Cherag UI library and super optimize you codebase,
          design systems, web applications, and more with a simple API for world
          class developer community. Cherag UI is a component library that
          enables devs to build universal design systems. It is easy to
          understand of React Native ui library, allowing you to develop apps
          for Android, iOS and the Web.
        </Text>
        <Text style={{ fontWeight: "600" }} fontSize="2xl">
          Cherag UI: The Design easy and developer friendly.
        </Text>
        <Text style={{ textAlign: "justify", marginVertical: 15 }}>
          Theme UI is a library for creating ease to use interfaces based on
          light design principles. Build custom component libraries, design
          systems, web applications, and more with a simple API for world class
          developer.
        </Text>
        <Div style={{ flexDirection: "row", marginVertical: 15 }}>
          <Link href={`/ui/Alert`} passHref>
            <Button
              bg={COLORS.black}
              color={COLORS.white}
              width={250}
              height={40}
              borderWidth={1}
              borderRadius={5}
              fontSize={16}
              fontWeight="bold"
              style={{
                justifyContent: "center",
                borderColor: COLORS.black,
              }}
            >
              Documentation
            </Button>
          </Link>
          <Link href={"https://github.com/aladdinstudios/cherag-ui"} passHref>
            <Button
              bg={COLORS.blue}
              color={COLORS.white}
              width={150}
              height={40}
              borderWidth={1}
              borderRadius={5}
              fontSize={16}
              fontWeight="bold"
              style={{
                justifyContent: "center",
                borderColor: COLORS.blue,
                marginLeft: 30,
              }}
            >
              GitHub
            </Button>
          </Link>
        </Div>
        <Text style={{ fontWeight: "600", marginVertical: 20 }} fontSize="2xl">
          Cherag UI: The Design easy and developer friendly.
        </Text>
        <Text>
           Multiplatform : Cherag UI supports multiple platforms; android, iOS
          and web. You can also customise properties using platform-specific
          props.
        </Text>
        <Text style={{ marginVertical: 10 }}>
           Accessible : Cherag UI easy to understand, code developer friendly,
          also support default style props.
        </Text>
        <Text>
           Customisable : The default style can be extended as you desire. You
          can also customise specific components for your app needs.
        </Text>
        <Text
          style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
          fontSize="2xl"
        >
          Create your own components
        </Text>
        <SyntaxHighlighter language="tsx" style={docco}>
          {exampleComponent}
        </SyntaxHighlighter>

        <Text
          style={{ fontWeight: "bold", marginTop: 40, marginBottom: 15 }}
          fontSize="2xl"
        >
          Get Started
        </Text>
        <Link href={`/ui/Alert`} passHref>
          <Button
            bg={COLORS.black}
            color={COLORS.white}
            width={150}
            height={40}
            borderWidth={1}
            borderRadius={5}
            fontSize={15}
            fontWeight="bold"
            style={{
              justifyContent: "center",
              borderColor: COLORS.black,
            }}
          >
            Explore the Docs
          </Button>
        </Link>
      </Div>
    </ScrollView>
  );
};

Ui.getLayout = (page) => <Layout>{page}</Layout>;

export default Ui;
