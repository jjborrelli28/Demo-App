import { css } from "../../../styles/stitches.config";
import { PagesMenu } from "./menues/pages-menu";
import { SearchMenu } from "./menues/search-menu";
import { UserMenu } from "./menues/user-menu";

export const Navbar = () => {
  return (
    <nav className={navbarStyles()}>
      <SearchMenu />
      <PagesMenu />
      <UserMenu />
    </nav>
  );
};

const navbarStyles = css("nav", {
  h: "$full",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  mx: "1rem",
});
