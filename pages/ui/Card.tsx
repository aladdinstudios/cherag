import { Card, COLORS, Div } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const CardComponent: NextPageWithLayout = () => {
  let __componentName = "Card";
  let __componentDescription =
    "Card component is a structure of material that provide as an entry point to more detailed information.";
  let __importCodeString = `import { Card, COLORS } from "cherag-ui";`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "",
      code: `   <Card
      title="The Garden City"
      subTitle="The Silicon Valley of BD"
      category="Photo"
      footerText="6 mins ago"
      w={180}
      h={270}
      imgH={3}
      shadow={10}
      paragraphStyle={{ fontSize: 12 }}
      subTitleStyle={{ fontSize: 12 }}
      categoryBgColor={COLORS.primary}
      categoryTextColor={COLORS.white}
    >
      Bangladesh is the center of BD high-tech industry. The city is also
      known for its parks and nightlife Bangladesh is the center of BD
      high-tech industry.
    </Card>`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "style of card container.",
    },
    {
      name: "title",
      type: "string",
      des: "Title of card.",
    },
    {
      name: "subTitle",
      type: "string",
      des: "Subtitle of card.",
    },
    {
      name: "footerText",
      type: "string",
      des: "Footer text of card.",
    },
    {
      name: "category",
      type: "string",
      des: "Name of the category.",
    },
    {
      name: "w",
      type: "number",
      des: "Image and with of card.",
    },
    {
      name: "h",
      type: "number",
      des: "height of card.",
    },
    {
      name: "imgH",
      type: "1 | 2 | 3 | 4 | 5",
      des: "Image height of card.",
    },
    {
      name: "categoryBgColor",
      type: "string",
      des: "Category background color of card.",
    },
    {
      name: "categoryTextColor",
      type: "string",
      des: "Category text color of card.",
    },
    {
      name: "children",
      type: "React.ReactNode | string",
      des: "Paragraph of card.",
    },
    {
      name: "titleStyle",
      type: "StyleProp<ViewStyle>",
      des: "Title style of card.",
    },
    {
      name: "subTitleStyle",
      type: "StyleProp<ViewStyle>",
      des: "Subtitle style of card.",
    },
    {
      name: "paragraphStyle",
      type: "StyleProp<ViewStyle>",
      des: "Paragraph style of card.",
    },
    {
      name: "footerStyle",
      type: "StyleProp<ViewStyle>",
      des: "Footer style of card.",
    },
    {
      name: "shadow",
      type: "number",
      des: "Shadow of card.",
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Card"
        properticsOne={__properticsOne}
      >
        <Div>
          <Card
            title="The Garden City"
            subTitle="The Silicon Valley of BD"
            category="Photo"
            footerText="6 mins ago"
            w={200}
            h={300}
            imgH={3}
            shadow={10}
            paragraphStyle={{ fontSize: 12 }}
            subTitleStyle={{ fontSize: 12 }}
            categoryBgColor={COLORS.primary}
            categoryTextColor={COLORS.white}
          >
            Bangladesh is the center of BD high-tech industry. The city is also
            known for its parks and nightlife Bangladesh is the center of BD
            high-tech industry.
          </Card>
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

CardComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default CardComponent;
