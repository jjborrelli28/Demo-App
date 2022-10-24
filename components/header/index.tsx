import { css } from "../../styles/stitches.config";
import { Navbar } from "./navbar";

export const Header = () => (
  <header className={headerStyles()}>
    <Navbar />
  </header>
);

const headerStyles = css({
  h: "$headerHeight",
  maxw: "$full",
});
