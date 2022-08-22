import { Button, COLORS, Div } from "cherag-ui";
import { type } from "os";
import React, { FC } from "react";
import { Props } from "./types";

const Sidebar: FC<Props> = ({ children, onPress }) => {
  return (
    <Button
      width={150}
      bg={COLORS.white}
      fontSize={18}
      color={COLORS.black}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};
export default Sidebar;
