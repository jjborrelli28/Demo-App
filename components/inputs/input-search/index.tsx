import { useCallback, useState } from "react";
import { css, styled } from "../../../styles/stitches.config";
import { LoupeIcon } from "../../icons/loupe-icon";
import clsx from "clsx";

export const InputSearch = () => {
  const [inFocus, setFocus] = useState(false);
  const [inBlur, setBlur] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const focus = useCallback(() => {
    setFocus(true);
    setBlur(false);
  }, [inBlur]);

  const blur = useCallback(() => {
    setBlur(true);
    setFocus(false);
  }, [inFocus]);

  return (
    <InputContainer
      className={clsx([inFocus && focusStyle.toString()])}
      onClick={() => setIsOpen(!isOpen)}
    >
      <LoupeIcon css={{ ml: "12px", transition: "all ease 0.1s" }} />
      <Input
        type="text"
        placeholder="Search on Facebook"
        onFocus={focus}
        onBlur={blur}
      />
    </InputContainer>
  );
};

const InputContainer = styled("span", {
  backgroundColor: "$antiFlashWhite",
  bra: "$3",
  display: "flex",
  alignItems: "center",
});

const Input = styled("input", {
  backgroundColor: "transparent",
  b: "none",
  m: "0 $2 0 $4",
  maxw: "0",
  fontSize: "base",

  "@bp4": {
    m: "0 $5 0 $4",
    maxw: "$full",
  },

  "&::placeholder": {
    color: "$graniteGray",
  },

  "&:focus": {
    outline: "none",
  },
});

const focusStyle = css({
  svg: {
    w: "0",
  },

  "input[type=text]": {
    m: "0 $5 0 0",
    w: "180px",
  },
});
