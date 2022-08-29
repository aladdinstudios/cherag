import { Div } from "cherag-ui";
import { PropsWithChildren } from "react";
import Wrapper from "./Sidebar/Wrapper";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Div style={{ flex: 1, flexDirection: "row" }}>
      <Wrapper />
      <Div>{children}</Div>
    </Div>
  );
};

export default Layout;
