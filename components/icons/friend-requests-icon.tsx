import { CircularContainer } from "./friend-home-icon";
import { IconProps } from "./icons-props";

export const FriendRequestsIcon = ({ active = false }: IconProps) => {
  return (
    <CircularContainer active={`${active}`}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/zNAmfsgg5bt.png?_nc_eui2=AeGGKi5qBvVEzQXfNVgC9av8XeXoqJ-RxC9d5eion5HEL1c6A9oRktDsAOuqk3-0jHWg6s7wU-7KW6ua_45yfJ91)",
          backgroundPosition: "0px -544px",
          backgroundSize: "auto",
          width: "20px",
          height: "20px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          backgroundColor: "$platinum",
          WebkitFilter: active ? "invert(100%)" : "",
        }}
      ></i>
    </CircularContainer>
  );
};
