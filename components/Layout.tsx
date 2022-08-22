import { Div } from "cherag-ui";
import { FC, PropsWithChildren, ReactNode } from "react";
import Wrapper from "./Sidebar/wrapper";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Div style={{ flex: 1, flexDirection: "row" }}>
      <Wrapper />
      <Div>{children}</Div>
    </Div>
  );
};

export default Layout;
