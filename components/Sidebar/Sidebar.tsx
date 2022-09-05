import { Button, COLORS, Div } from "cherag-ui";
import Link from "next/link";
import { FC } from "react";
import { SidebarProps } from "./types";

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Div style={{ marginVertical: 8, paddingRight: 50 }}>
      <Link href={`/ui/${children}`} passHref>
        <Button w={"100%"} bg={COLORS.white} fontSize={18} color={COLORS.black}>
          {children}
        </Button>
      </Link>
    </Div>
  );
};
export default Sidebar;
