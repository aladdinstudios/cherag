import { COLORS, Div, Divider, Text } from "cherag-ui";
import { FC, ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { UsecaseArayObjProps } from "../pages/ui/Avatar";
import { ProjectColor } from "../theme";
import { ProperticsProps } from "../types/Propertics";

export type RenderAlertItemProps = {
  componentName: string;
  importCodeString: string;
  usecaseCodeStringArr: UsecaseArayObjProps[];
  children: ReactNode;
  propertics: ProperticsProps[];
};

export const RenderAlertItem: FC<RenderAlertItemProps> = ({
  componentName,
  importCodeString,
  usecaseCodeStringArr,
  children,
  propertics,
}) => {
  return (
    <Div style={{ marginTop: 80, marginLeft: 80, height: "auto" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        {componentName}
      </Text>
      <Text style={{ marginBottom: 25 }}>
        Component for displaying messages, notifications, or other application
        state.
      </Text>

      <SyntaxHighlighter
        customStyle={{ height: 110 }}
        language="tsx"
        style={docco}
      >
        {importCodeString}
      </SyntaxHighlighter>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 25 }}>
        Usage
      </Text>
      {usecaseCodeStringArr.map((item) => {
        return (
          <Div key={item.name}>
            <Text style={{ fontSize: 24, marginVertical: 20 }}>
              {item.name}
            </Text>
            <SyntaxHighlighter language="tsx" style={docco}>
              {item.code}
            </SyntaxHighlighter>
          </Div>
        );
      })}

      <Div
        style={{
          marginTop: 30,
          backgroundColor: COLORS.lightGray5,
          width: "100%",
          height: "30%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Div>

      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 20 }}>
        Props
      </Text>
      <Div style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", width: 200 }}>Name</Text>
        <Text style={{ fontWeight: "bold", width: 200 }}>Type</Text>
        <Text style={{ fontWeight: "bold" }}>Description</Text>
      </Div>
      <Divider
        thickness={1}
        color={ProjectColor.border}
        style={{
          marginVertical: 10,
        }}
      />
      {propertics.map((item) => {
        return (
          <Div key={item.name}>
            <Div key={item.name} style={{ flexDirection: "row" }}>
              <Text style={{ width: 200 }}>{item.name}</Text>
              <Text style={{ width: 200 }}>{item.type}</Text>
              <Text style={{ width: 500 }}>{item.des}</Text>
            </Div>
            <Divider
              thickness={1}
              color={ProjectColor.border}
              style={{
                marginVertical: 10,
              }}
            />
          </Div>
        );
      })}
    </Div>
  );
};

export default RenderAlertItem;
