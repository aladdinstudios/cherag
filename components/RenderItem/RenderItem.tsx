import { Alert, COLORS, Div, Divider, Text } from "cherag-ui";
import React, { Children, FC, ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ProjectColor } from "../../theme";

export type ObjProps = {
  obj1: {
    name: string;
    type: string;
    des: string;
  };
  obj2: {
    name: string;
    type: string;
    des: string;
  };
};

export type RenderItemProps = {
  componentName: string;
  importCodeString: string;
  useCaseCodeString: string;
  children: ReactNode;
  obj: ObjProps;
};

export const RenderItem: FC<RenderItemProps> = ({
  componentName,
  importCodeString,
  useCaseCodeString,
  children,
  obj,
}) => {
  return (
    <Div style={{ marginTop: 80, marginLeft: 80, height: "auto" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        {componentName}
      </Text>
      <Text style={{ marginBottom: 20 }}>
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
      <Div
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ width: 100 }}>{obj.obj1.name}</Text>
        <Text style={{ width: 100 }}>{obj.obj1.type}</Text>
        <Text style={{ width: 500, textAlign: "justify" }}>
          Type of component, Component colors.Type of component, Component
          colors.Type of component, Component colors.Type of component,
          Component colors.Type of component, Component colors. Type of
          component, Component colors.Type of component, Component colors.Type
          of component, Component colors.Type of component, Component
          colors.Type of component, Component colors.
        </Text>
      </Div>
      <Divider
        thickness={1}
        color={ProjectColor.border}
        style={{
          marginVertical: 10,
        }}
      />
      <Div style={{ flexDirection: "row" }}>
        <Text style={{ width: 100 }}>{obj.obj2.name}</Text>
        <Text style={{ width: 100 }}>{obj.obj2.type}</Text>
        <Text>{obj.obj2.des}</Text>
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
};

export default RenderItem;
