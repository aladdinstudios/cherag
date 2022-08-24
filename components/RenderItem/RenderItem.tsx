import { COLORS, Div, Divider, Text } from "cherag-ui";
import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ProjectColor } from "../../theme";
import { RenderItemProps } from "./types";

export const RenderItem: FC<RenderItemProps> = ({
  componentName,
  importCodeString,
  useCaseCodeString,
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

      <SyntaxHighlighter language="tsx" style={docco}>
        {importCodeString}
      </SyntaxHighlighter>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 20 }}>
        Usage
      </Text>
      <SyntaxHighlighter language="tsx" style={docco}>
        {useCaseCodeString}
      </SyntaxHighlighter>
      <Div
        style={{
          marginTop: 30,
          backgroundColor: COLORS.lightGray5,
          width: "100%",
          height: 200,
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
        <Text style={{ fontWeight: "bold", width: 100 }}>Name</Text>
        <Text style={{ fontWeight: "bold", width: 100 }}>Type</Text>
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
          <>
            <Div key={item.name} style={{ flexDirection: "row" }}>
              <Text style={{ width: 100 }}>{item.name}</Text>
              <Text style={{ width: 100 }}>{item.type}</Text>
              <Text style={{ width: 500 }}>{item.des}</Text>
            </Div>
            <Divider
              thickness={1}
              color={ProjectColor.border}
              style={{
                marginVertical: 10,
              }}
            />
          </>
        );
      })}
    </Div>
  );
};

export default RenderItem;
