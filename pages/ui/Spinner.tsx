import { COLORS, Div, Spinner } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const SpinnerComponent: NextPageWithLayout = () => {
  let __componentName = "Spinner";
  let __componentDescription = "Displays a circular loading indicator.";
  let __importCodeString = `import { Spinner } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `    <Spinner color={COLORS.errorIcon} size={"small"} />`,
    },
    {
      name: "Example 2",
      code: `    <Spinner color={COLORS.errorIcon} size={"large"} />`,
    },
    {
      name: "Example 3",
      code: `    <Spinner color={COLORS.errorIcon} size={70} />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "color",
      type: "string",
      des: "Color of spinner.",
    },
    {
      name: "size",
      type: "string | number",
      des: "Size of spinner.",
    },
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "style of spinner.",
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Spinner Propertics"
        properticsOne={__properticsOne}
      >
        <Div
          style={{
            flexDirection: "row",
          }}
        >
          <Spinner
            style={{ marginHorizontal: 10 }}
            color={COLORS.errorIcon}
            size={"small"}
          />
          <Spinner
            style={{ marginHorizontal: 10 }}
            color={COLORS.successIcon}
            size={"large"}
          />
          <Spinner
            style={{ marginHorizontal: 10 }}
            color={COLORS.errorIcon}
            size={70}
          />
          <Spinner
            style={{ marginHorizontal: 10 }}
            color={COLORS.successIcon}
            size={"large"}
          />
          <Spinner
            style={{ marginHorizontal: 10 }}
            color={COLORS.errorIcon}
            size={"small"}
          />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

SpinnerComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default SpinnerComponent;
