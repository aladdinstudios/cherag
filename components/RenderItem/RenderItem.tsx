import { COLORS, Div, Divider, Text } from "cherag-ui";
import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ProjectColor } from "../../theme";
import { RenderItemProps } from "./types";

export const RenderItem: FC<RenderItemProps> = ({
  componentName,
  componentDescription,
  importCodeString,
  usecaseCodeStringArr,
  children,
  properticsOneTitle,
  properticsOne,
  properticsTwoTitle,
  properticsTwo,
  properticsThreeTitle,
  properticsThree,
}) => {
  return (
    <Div style={{ marginTop: 80, marginLeft: 80 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 30 }}>
        {componentName}
      </Text>
      <Text style={{ paddingBottom: 25 }}>{componentDescription}</Text>
      <Div>
        <SyntaxHighlighter language="tsx" style={docco}>
          {importCodeString}
        </SyntaxHighlighter>
      </Div>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 25,
        }}
      >
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
          height: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Div>

      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 30 }}>
        Props
      </Text>
      {properticsOneTitle && (
        <Div>
          <Text style={{ fontSize: 20, marginVertical: 20 }}>
            {properticsOneTitle}
          </Text>
          <Div style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", width: 200 }}>Name</Text>
            <Text style={{ fontWeight: "bold", width: 200 }}>Type</Text>
            <Text style={{ fontWeight: "bold" }}>Description</Text>
          </Div>
          <Divider
            thickness={1}
            color={ProjectColor.border}
            w={850}
            style={{
              marginVertical: 10,
            }}
          />
          {properticsOne?.map((item) => {
            return (
              <Div key={item.name}>
                <Div style={{ flexDirection: "row" }}>
                  <Text style={{ width: 200 }}>{item.name}</Text>
                  <Text style={{ width: 200 }}>{item.type}</Text>
                  <Text style={{ width: 500 }}>{item.des}</Text>
                </Div>
                <Divider
                  w={850}
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
      )}

      {properticsTwoTitle && (
        <Div>
          <Text style={{ fontSize: 20, marginVertical: 15 }}>
            {properticsTwoTitle}
          </Text>
          <Div style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", width: 200 }}>Name</Text>
            <Text style={{ fontWeight: "bold", width: 200 }}>Type</Text>
            <Text style={{ fontWeight: "bold" }}>Description</Text>
          </Div>
          <Divider
            thickness={1}
            color={ProjectColor.border}
            w={650}
            style={{
              marginVertical: 10,
            }}
          />
          {properticsTwo?.map((item) => {
            return (
              <Div key={item.name}>
                <Div style={{ flexDirection: "row" }}>
                  <Text style={{ width: 200 }}>{item.name}</Text>
                  <Text style={{ width: 200 }}>{item.type}</Text>
                  <Text style={{ width: 500 }}>{item.des}</Text>
                </Div>
                <Divider
                  w={650}
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
      )}

      {properticsThreeTitle && (
        <Div>
          <Text style={{ fontSize: 20, marginVertical: 15 }}>
            {properticsThreeTitle}
          </Text>
          <Div style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", width: 200 }}>Name</Text>
            <Text style={{ fontWeight: "bold", width: 200 }}>Type</Text>
            <Text style={{ fontWeight: "bold" }}>Description</Text>
          </Div>
          <Divider
            thickness={1}
            color={ProjectColor.border}
            w={650}
            style={{
              marginVertical: 10,
            }}
          />
          {properticsThree?.map((item) => {
            return (
              <Div key={item.name}>
                <Div style={{ flexDirection: "row" }}>
                  <Text style={{ width: 200 }}>{item.name}</Text>
                  <Text style={{ width: 200 }}>{item.type}</Text>
                  <Text style={{ width: 500 }}>{item.des}</Text>
                </Div>
                <Divider
                  w={650}
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
      )}
    </Div>
  );
};

export default RenderItem;
