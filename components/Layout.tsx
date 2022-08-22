import { Div } from "cherag-ui";
import Wrapper from "./Sidebar/wrapper";

export default function Layout({ children }) {
  return (
    <Div style={{ flex: 1, flexDirection: "row" }}>
      <Wrapper />
      <Div>{children}</Div>
    </Div>
  );
}
