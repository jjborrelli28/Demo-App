import { styled } from "../../styles/stitches.config";
import { IconProps } from "./icons-props";

export const FriendHomeIcon = ({ active = false }: IconProps) => {
  return (
    <CircularContainer active={`${active}`}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/Drmr9rfJi3Y.png?_nc_eui2=AeEGa4kTnTYBdfREjeszudwhGgXD2-x2F5waBcPb7HYXnJhtsEh6ThWOY3z5FIyx_K770AdrJIgzYzcQiZTmXhT9)",
          backgroundPosition: "-147px -145px",
          backgroundSize: "189px 234px",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          backgroundColor: "$platinum",
          WebkitFilter: "invert(100%)",
        }}
      ></i>
    </CircularContainer>
  );
};

export const CircularContainer = styled("span", {
  h: "$iconSizeSmall",
  w: "$iconSizeSmall",
  b: "none",
  bra: "$3",
  backgroundColor: "$blueCrayola",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    active: {
      true: {
        backgroundColor: "$blueCrayola",
      },
      false: {
        backgroundColor: "$platinum",
      },
    },
  },
});
