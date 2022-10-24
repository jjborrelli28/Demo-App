import { IconProps } from "./icons-props";
import { css as styles } from "../../styles/stitches.config";

export const DotsMenuIcon = ({ active, css }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="currentColor"
      width="20"
      height="20"
      className={styles(css)()}
      color={active ? "#1876f2" : "#050505"}
    >
      <circle cx="7" cy="7" r="6"></circle>
      <circle cx="22" cy="7" r="6"></circle>
      <circle cx="37" cy="7" r="6"></circle>
      <circle cx="7" cy="22" r="6"></circle>
      <circle cx="22" cy="22" r="6"></circle>
      <circle cx="37" cy="22" r="6"></circle>
      <circle cx="7" cy="37" r="6"></circle>
      <circle cx="22" cy="37" r="6"></circle>
      <circle cx="37" cy="37" r="6"></circle>
    </svg>
  );
};
