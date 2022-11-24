import { css as styles } from "../../styles/stitches.config";
import { IconProps } from "./icons-props";

export const ArrowIcon = ({ css }: IconProps) => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage:
          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/PZYo-Qx6hO6.png?_nc_eui2=AeH7ZbLeDiuiUgSrlrd7lBv9UWQylet31hhRZDKV63fWGD8qegDZsRS4YhTTlwFWCXbU7SMvLsMGReBebisz6-NL)",
        backgroundPosition: "-84px -84px",
        backgroundSize: "auto",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        backgroundColor: "$platinum",
        WebkitFilter:
          "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
      }}
      className={styles(css)()}
    ></i>
  );
};
