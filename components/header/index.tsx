import { css, styled } from "../../styles/stitches.config";
import { PagesMenu } from "./menues/pages-menu";
import { SearchMenu } from "./menues/search-menu";
import { UserMenu } from "./menues/user-menu";
import { PersonProps } from "../card";

export const Header = ({ user }: HeaderProps) => (
  <header className={headerStyles()}>
    <Navbar>
      <SearchMenu />
      <PagesMenu />
      <UserMenu user={user} />
    </Navbar>
  </header>
);

const headerStyles = css({
  h: "$headerHeight",
  maxw: "$full",
});

const Navbar = styled("nav", {
  h: "$full",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  mx: "1rem",
});

export type HeaderProps = {
  user: PersonProps;
};
