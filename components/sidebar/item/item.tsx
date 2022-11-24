import { styled } from "../../../styles/stitches.config";
import { PropsWithChildren } from "react";
import { ArrowIcon } from "../../icons/arrow-icon";

export const Item = ({ children, active }: PropsWithChildren<RowProps>) => {
  return (
    <ListContainer active={`${active}`}>
      <ChildrenRowContainer>{children}</ChildrenRowContainer>
      {!active && <ArrowIcon css={{ mr: "$3" }} />}
    </ListContainer>
  );
};

const ListContainer = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "$2",
  h: "52px",
  p: "$4",
  fontSize: "$1",
  fontWeight: "$3",

  "&:hover": {
    backgroundColor: "$antiFlashWhite",
    cursor: "pointer",
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$antiFlashWhite",
      },
      false: {
        backgroundColor: "$white",
      },
    },
  },
});

const ChildrenRowContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

type RowProps = {
  active: boolean;
};
