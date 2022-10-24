import { IconProps } from "./icons-props";
import { css as styles } from "../../styles/stitches.config";

export const MarketplaceIcon = ({ active, css }: IconProps) => {
  if (active)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        fill="currentColor"
        height="28"
        width="28"
        color="#1B74E4"
        className={styles(css)()}
      >
        <path d="m10.995,23.625l0,-5.8c0,-0.526 0.424,-0.95 0.95,-0.95l4.09,0c0.526,0 0.95,0.424 0.95,0.95l0,5.8l4.98,0c0.43,0 0.78,-0.348 0.78,-0.78l0,-8.264c-0.124,-0.073 -0.242,-0.159 -0.35,-0.256l-0.41,-0.37c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.17,0.15c-0.55,0.49 -1.25,0.76 -1.97,0.76l-0.23,0c-0.71,0 -1.41,-0.26 -1.96,-0.75l-0.19,-0.17c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.19,0.17c-0.55,0.49 -1.25,0.76 -1.96,0.76l-0.14,0c-0.71,0 -1.4,-0.26 -1.94,-0.74l-0.22,-0.19c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.18,0.16c-0.55,0.49 -1.25,0.76 -1.97,0.76l-0.18,0c-0.72,0 -1.41,-0.26 -1.96,-0.75l-0.2,-0.17c-0.18,-0.17 -0.44,-0.17 -0.63,0l-0.48,0.43c-0.076,0.067 -0.156,0.129 -0.24,0.183l0,8.287c0,0.43 0.348,0.78 0.78,0.78l4.96,0zm13.25,-8.795l0,8.015c0,1.262 -1.023,2.28 -2.28,2.28l-15.93,0c-1.262,0 -2.28,-1.023 -2.28,-2.28l0,-7.989c-0.993,-0.139 -1.76,-1.038 -1.76,-2.131l0,-2.35c0,-0.28 0.22,-0.5 0.5,-0.5l23.01,0c0.28,0 0.5,0.22 0.5,0.5l0,2.18c0,1.124 -0.756,2.063 -1.76,2.275zm0.71,-5.955l-21.93,0c-0.35,0 -0.59,-0.36 -0.46,-0.69l1.82,-4.49c0.19,-0.49 0.65,-0.82 1.17,-0.82l16.87,0c0.52,0 0.98,0.33 1.17,0.83l1.82,4.48c0.14,0.33 -0.11,0.69 -0.46,0.69z"></path>
      </svg>
    );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="currentColor"
      height="28"
      width="28"
      color="#65676B"
      className={styles(css)()}
    >
      <path d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"></path>
    </svg>
  );
};
