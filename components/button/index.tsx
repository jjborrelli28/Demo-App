import React, { MouseEventHandler, PropsWithChildren } from "react";
import { styled } from "../../styles/stitches.config";

export const Button = ({
  children,
  onClick,
  variant,
  active,
  restProps,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <BaseButton
      variant={variant}
      onClick={onClick}
      {...restProps}
      css={{
        backgroundColor: variant === "round" && active && "$aliceBlue",
        "&:hover": {
          backgroundColor: variant === "round" && active && "$azureishWhite",
        },
      }}
    >
      {children}
      {variant === "rectangle" && active && <LowerLine />}
    </BaseButton>
  );
};

const BaseButton = styled("button", {
  position: "relative",
  p: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    variant: {
      round: {
        h: "$iconSize",
        w: "$iconSize",
        b: "none",
        bra: "$3",
        backgroundColor: "$platinum",
        transition: "background-color ease 0.1s",

        "&:hover": {
          backgroundColor: "$gainsboro",
        },
      },
      rectangle: {
        h: "calc($full - 6px)",
        w: "$full",
        my: "$3",
        b: "none",
        bra: "$2",
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: "$antiFlashWhite",
        },
      },
      primary: {
        backgroundColor: "$aliceBlue",
        w: "$full",
        color: "$blueCrayola",
        fontSize: "$base",
        fontWeight: "$4",
        b: "none",
        bra: "$1",
        h: "36px",

        "&:hover": {
          backgroundColor: "$azureishWhite",
        },
      },
      secondary: {
        backgroundColor: "$platinum",
        w: "$full",
        color: "$vampireBlack",
        fontSize: "$base",
        fontWeight: "$4",
        b: "none",
        bra: "$1",
        h: "36px",

        "&:hover": {
          backgroundColor: "$gainsboro",
        },
      },
    },
  },
});

const LowerLine = styled("span", {
  position: "absolute",
  h: "3px",
  w: "$full",
  backgroundColor: "$blueCrayola",
  bra: "$1",
  bottom: "-3px",
  left: "0",
});

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "round" | "rectangle" | "primary" | "secondary";
  active?: boolean;
  restProps?: any;
};
