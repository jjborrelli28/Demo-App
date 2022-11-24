import { CircularContainer } from "./friend-home-icon";
import { IconProps } from "./icons-props";

export const BirthdaysIcon = ({ active = false }: IconProps) => {
  return (
    <CircularContainer active={`${active}`}>
      <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/lUzUy-vhLJr.png?_nc_eui2=AeGsTZEVSInHtcOABurrFlHuxHjam4PsGgDEeNqbg-waAGHpMHd074R7zvTZXPI1SjxqwnacDl1Qr5l5EQv57s66)",
          backgroundPosition: "0px -541px",
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
