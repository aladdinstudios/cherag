import { Image } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const ImageComponent: NextPageWithLayout = () => {
  let __componentName = "Image";
  let __componentDescription =
    "The Image component allows one to display images.";
  let __importCodeString = `import { Image } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "absolute import",
      code: `
    <Image
      w={120}
      h={120}
      size={10}
      source={require("../../assets/cat.jpg")}
      alt="Immage not found"
    />`,
    },
    {
      name: "Url import",
      code: `
    <Image
      w={80}
      h={80}
      size={10}
      source={{
        uri: "https://avatars.githubusercontent.com/u/1342004?s=64&v=4",
      }}
      alt="Immage not found"
    />`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "w",
      type: "number",
      des: "Width of Image.",
    },
    {
      name: "h",
      type: "number",
      des: "Height of Image.",
    },
    {
      name: "size",
      type: "number",
      des: "Image ratio size.",
    },
    {
      name: "source",
      type: "StyleProp<ImageSource>",
      des: "Style of Image.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <>
          <Image
            w={120}
            h={120}
            size={10}
            source={require("../../assets/cat.jpg")}
          />
          <Image
            w={80}
            h={80}
            size={90}
            source={{
              uri: "https://avatars.githubusercontent.com/u/1342004?s=64&v=4",
            }}
          />
        </>
      </RenderItem>
    </ScrollView>
  );
};

ImageComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default ImageComponent;
