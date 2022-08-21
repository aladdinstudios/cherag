import { Div, IconButton, SIZES, Text } from "cherag-ui";
import type { NextPage } from "next";
import { useState } from "react";
import { StyleSheet } from "react-native";

const Home: NextPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <Div>
      <Text>Welcome to Cherag Docs!</Text>
      <IconButton
        color="red"
        onPress={(e) => console.log("test icon button")}
        icon="timeline-alert"
      />
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
