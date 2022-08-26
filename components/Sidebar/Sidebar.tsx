import { Button, COLORS } from "cherag-ui";
import Link from "next/link";
import { FC } from "react";
import { SidebarProps } from "./types";

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Link href={`/ui/${children}`} passHref>
      <Button width={150} bg={COLORS.white} fontSize={18} color={COLORS.black}>
        {children}
      </Button>
    </Link>
  );
};
export default Sidebar;
