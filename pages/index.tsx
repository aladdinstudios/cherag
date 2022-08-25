import { COLORS, Div, IconButton, Text } from "cherag-ui";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Div style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Text fontSize="4xl">Welcome to Cherag Docs!</Text>
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="heart"
      />
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="heart"
      />
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="heart"
      />
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="heart"
      />
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="heart"
      />
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="heart"
      />
      <Link href="/ui">
        <a style={{ color: COLORS.red, fontSize: 20 }}>
          Click here for Cherag UI Documentation
        </a>
      </Link>
    </Div>
  );
};

export default Home;
