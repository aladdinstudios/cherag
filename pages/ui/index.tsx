import { Button, COLORS, Div, Text } from "cherag-ui";
import Link from "next/link";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Ui: NextPageWithLayout = () => {
  return (
    <Div style={{ width: "37%", marginTop: 50 }}>
      <Text fontSize="4xl">
        Cross-platform Cherag UI design for React Native.
      </Text>
      <Text style={{ marginVertical: 30, textAlign: "justify" }}>
        Cherag UI is a library for creating easy to use for user interfaces.Use
        Cherag UI library and super optimize you codebase, design systems, web
        applications, and more with a simple API for world class developer
        community. Cherag UI is a component library that enables devs to build
        universal design systems. It is easy to understand of React Native ui
        library, allowing you to develop apps for Android, iOS and the Web.
      </Text>

      <Text style={{ fontWeight: "600" }} fontSize="2xl">
        Cherag UI: The Design easy and developer friendly.
      </Text>

      <Text style={{ textAlign: "justify", marginVertical: 15 }}>
        Theme UI is a library for creating ease to use interfaces based on light
        design principles. Build custom component libraries, design systems, web
        applications, and more with a simple API for world class developer.
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

      <Text style={{ fontWeight: "bold", marginVertical: 15 }} fontSize="2xl">
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
  );
};

Ui.getLayout = (page) => <Layout>{page}</Layout>;

export default Ui;
