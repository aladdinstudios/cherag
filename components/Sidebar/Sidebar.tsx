import { Button, COLORS, Div } from "cherag-ui";
import { type } from "os";
import React, { FC } from "react";

export type Props = {
  children: string;
};

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <Button
      bg={COLORS.white}
      fontSize={18}
      color={COLORS.black}
      onPress={() => {
        console.log("Custom button pressed");
      }}
    >
      {children}
    </Button>
  );
};
export default Sidebar;
