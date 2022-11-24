import { CircularContainer } from "./friend-home-icon";
import { IconProps } from "./icons-props";

export const AllFriendsIcon = ({ active = false }: IconProps) => {
  return (
    <CircularContainer active={`${active}`}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/n5YY5SCjZKU.png?_nc_eui2=AeERnXMeXEzV3BHxbqz1TJgC88kzGnfy2b3zyTMad_LZvRcnx2UzFtiChW3MbZ3jUmynD-kzE133eE8xRUwZGwcE)",
          backgroundPosition: "0px -171px",
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
