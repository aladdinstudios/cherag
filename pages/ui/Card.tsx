import { Card, COLORS } from "cherag-ui";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import RenderAlertItem from "../../components/RenderAlertItem";
import { ProperticsProps } from "../../types/Propertics";
import { NextPageWithLayout } from "../_app";

export interface UsecaseArayObjProps {
  name: string;
  code: string;
}

const CardComponent: NextPageWithLayout = () => {
  let __componentName = "Card";
  let __componentDescription =
    "Card component is a structure of material that provide as an entry point to more detailed information.";
  let __propertics: ProperticsProps[] = [
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
      des: "Image with of card.",
    },
    {
      name: "h",
      type: "number",
      des: "Image height of card.",
    },
    {
      name: "categoryBgColor",
      type: "string",
      des: "Category background color of card.",
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
  ];
  let __importCodeString = `import { Card } from 'cherag-ui'`;
  let __useCaseCodeStringArr: UsecaseArayObjProps[] = [
    {
      name: "",
      code: `
    <Card
      w={250}
      style={{
        width: 250,
        height: 380,
      }}
      title="The Garden City"
      subTitle="The Silicon Valley of BD"
      category="Photo"
      footerText="6 mins ago"
      footerStyle={{
        width: 80,
        fontSize: 14,
      }}
      paragraphStyle={{ fontSize: 14, color: COLORS.blackish }}
      subTitleStyle={{ fontSize: 12 }}
      titleStyle={{ fontSize: 22, color: COLORS.blackish }}
    >
      Bengaluru also called Bangalore is the center of BD high-tech
      industry. The city is also known for its parks and nightlife Bengaluru
      also called Bangalore is the center of BD high-tech industry. The city
      is also known for its parks and nightlife
   </Card>`,
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderAlertItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        propertics={__propertics}
      >
        <Card
          w={250}
          style={{
            width: 250,
            height: 380,
          }}
          title="The Garden City"
          subTitle="The Silicon Valley of BD"
          category="Photo"
          footerText="6 mins ago"
          footerStyle={{
            width: 80,
            fontSize: 14,
          }}
          paragraphStyle={{ fontSize: 14, color: COLORS.blackish }}
          subTitleStyle={{ fontSize: 12 }}
          titleStyle={{ fontSize: 22, color: COLORS.blackish }}
        >
          Bengaluru also called Bangalore is the center of BD high-tech
          industry. The city is also known for its parks and nightlife Bengaluru
          also called Bangalore is the center of BD high-tech industry. The city
          is also known for its parks and nightlife
        </Card>
      </RenderAlertItem>
    </ScrollView>
  );
};

CardComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default CardComponent;
