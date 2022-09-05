import { COLORS, Div, Switch } from "cherag-ui";
import { useState } from "react";
import { ScrollView } from "react-native";
import Layout from "../../components/Layout";
import { RenderItem } from "../../components/RenderItem";
import {
  ProperticsProps,
  UsecaseArrayObjProps,
} from "../../components/RenderItem/types";
import { NextPageWithLayout } from "../_app";

const SwitchComponent: NextPageWithLayout = () => {
  const [isSwitchCheck, setIsSwitchCheck] = useState(false);
  let __componentName = "Switch";
  let __componentDescription =
    "Switch is a visual toggle between two components.";
  let __importCodeString = `import { Switch } from "cherag-ui"'`;
  let __useCaseCodeStringArr: UsecaseArrayObjProps[] = [
    {
      name: "Example 1",
      code: `     <Switch
        size="sm"
        offTrackColor={COLORS.red}
        onTrackColor={COLORS.green}
        isSwitchCheck={isSwitchCheck}
        setIsSwitchCheck={setIsSwitchCheck}
        thumbColor={COLORS.lightGray7}
      />`,
    },
    {
      name: "Example 2",
      code: `     <Switch
        size="md"
        offTrackColor={COLORS.red}
        onTrackColor={COLORS.green}
        isSwitchCheck={isSwitchCheck}
        setIsSwitchCheck={setIsSwitchCheck}
        thumbColor={COLORS.lightGray7}
      />`,
    },
  ];
  let __properticsOne: ProperticsProps[] = [
    {
      name: "style",
      type: "StyleProp<ViewStyle>",
      des: "Style of Switch.",
    },
    {
      name: "size",
      type: "string",
      des: "sm | md | lg",
    },
    {
      name: "disabled",
      type: "boolean",
      des: "Disable switch button.",
    },
    {
      name: "isSwitchCheck",
      type: "boolean",
      des: "Save switch active status.",
    },
    {
      name: "setIsSwitchCheck",
      type: "(event: GestureResponderEvent) => void",
      des: "Change and save function for switch active status .",
    },
    {
      name: "thumbColor",
      type: "string",
      des: "Thumb color of switch.",
    },
    {
      name: "onTrackColor",
      type: "string",
      des: "Active track color.",
    },
    {
      name: "offTrackColor",
      type: "string",
      des: "Deactive track color.",
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <RenderItem
        componentName={__componentName}
        componentDescription={__componentDescription}
        importCodeString={__importCodeString}
        usecaseCodeStringArr={__useCaseCodeStringArr}
        properticsOneTitle="Switch Propertics"
        properticsOne={__properticsOne}
      >
        <Div style={{ flex: 1, justifyContent: "space-around" }}>
          <Switch
            size="sm"
            offTrackColor={COLORS.red}
            onTrackColor={COLORS.green}
            isSwitchCheck={isSwitchCheck}
            setIsSwitchCheck={setIsSwitchCheck}
            thumbColor={COLORS.lightGray7}
          />
          <Switch
            size="md"
            offTrackColor={COLORS.red}
            onTrackColor={COLORS.green}
            isSwitchCheck={isSwitchCheck}
            setIsSwitchCheck={setIsSwitchCheck}
            thumbColor={COLORS.lightGray7}
          />
          <Switch
            size="lg"
            offTrackColor={COLORS.red}
            onTrackColor={COLORS.green}
            isSwitchCheck={isSwitchCheck}
            setIsSwitchCheck={setIsSwitchCheck}
            thumbColor={COLORS.lightGray7}
          />
          <Switch
            size="md"
            offTrackColor={COLORS.red}
            onTrackColor={COLORS.green}
            isSwitchCheck={isSwitchCheck}
            setIsSwitchCheck={setIsSwitchCheck}
            thumbColor={COLORS.lightGray7}
          />
          <Switch
            size="sm"
            offTrackColor={COLORS.red}
            onTrackColor={COLORS.green}
            isSwitchCheck={isSwitchCheck}
            setIsSwitchCheck={setIsSwitchCheck}
            thumbColor={COLORS.lightGray7}
          />
        </Div>
      </RenderItem>
    </ScrollView>
  );
};

SwitchComponent.getLayout = (page) => <Layout>{page}</Layout>;

export default SwitchComponent;
