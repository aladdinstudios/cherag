import { COLORS, Div, Text } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const DivComponent: NextPageWithLayout = () => {
  let __componentName = "Div";
  let __componentDescription =
    "Checkboxes allow the selection of multiple options from various childred.";
  let __importCodeString = `import { COLORS, Div, Text } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArayObjProps[] = [
    {
      name: "",
      code: `
    <Div
      bg={COLORS.errorIcon}
      w={200}
      h={100}
      p={10}
      m={10}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        fontSize="xl"
        style={{
          color: COLORS.white,
        }}
      >
        Div Commponent
      </Text>
    </Div>`,
    },
  ];
  let __propertics: ProperticsProps[] = [
    {
      name: "values",
      type: "string[]",
      des: "Selected items of checkbox.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      des: "Child elements of checkbox.",
    },
    {
      name: "onChange",
      type: "(values: any) => any",
      des: "The callback return when any children Checkbox is checked or unchecked..",
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
        <Div
          bg={COLORS.errorIcon}
          w={200}
          h={100}
          p={10}
          m={10}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            fontSize="xl"
            style={{
              color: COLORS.white,
            }}
          >
            Div Commponent
          </Text>
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

DivComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default DivComponent;
