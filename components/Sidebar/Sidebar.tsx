import { Button, COLORS } from "cherag-ui";
import Link from "next/link";
import React, { FC } from "react";
import { Props } from "./types";

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <Link href={`/ui/${children}`} passHref>
      <Button width={150} bg={COLORS.white} fontSize={18} color={COLORS.black}>
        {children}
      </Button>
    </Link>
  );
};
export default Sidebar;
