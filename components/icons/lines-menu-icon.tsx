import { IconProps } from "./icons-props";
import { css as styles } from "../../styles/stitches.config";

export const LinesMenuIcon = ({ active, css }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="currentColor"
      height="28"
      width="28"
      color={active ? "#1B74E4" : "#65676B"}
      className={styles(css)()}
    >
      <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
    </svg>
  );
};
