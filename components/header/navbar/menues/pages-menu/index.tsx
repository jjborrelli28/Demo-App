import { useState } from "react";
import { css } from "../../../../../styles/stitches.config";
import { Button } from "../../../../button";
import { ComunityIcon } from "../../../../icons/comunity-icon";
import { FriendsIcon } from "../../../../icons/friends-icon";
import { HomeIcon } from "../../../../icons/home-icon";
import { LinesMenuIcon } from "../../../../icons/lines-menu-icon";
import { MarketplaceIcon } from "../../../../icons/marketplace-icon";
import { WatchIcon } from "../../../../icons/watch-icon";

export const PagesMenu = () => {
  const [page, setPage] = useState("home");

  return (
    <ul className={pagesMenuStyles()}>
      <li className={restIconsStyles()}>
        <Button
          variant="rectangle"
          onClick={() => setPage("home")}
          active={page === "home" ?? false}
        >
          <HomeIcon active={page === "home" ?? false} />
        </Button>
      </li>
      <li className={restIconsStyles()}>
        <Button
          variant="rectangle"
          onClick={() => setPage("friends")}
          active={page === "friends" ?? false}
        >
          <FriendsIcon active={page === "friends" ?? false} />
        </Button>
      </li>
      <li className={restIconsStyles()}>
        <Button
          variant="rectangle"
          onClick={() => setPage("watch")}
          active={page === "watch" ?? false}
        >
          <WatchIcon active={page === "watch" ?? false} />
        </Button>
      </li>
      <li className={restIconsStyles()}>
        <Button
          variant="rectangle"
          onClick={() => setPage("marketplace")}
          active={page === "marketplace" ?? false}
        >
          <MarketplaceIcon active={page === "marketplace" ?? false} />
        </Button>
      </li>
      <li className={comunityIconStyles()}>
        <Button
          variant="rectangle"
          onClick={() => setPage("comunity")}
          active={page === "comunity" ?? false}
        >
          <ComunityIcon active={page === "comunity" ?? false} />
        </Button>
      </li>
      <li className={linesMenuIconStyles()}>
        <Button
          variant="rectangle"
          onClick={() => setPage("menu")}
          active={page === "menu" ?? false}
        >
          <LinesMenuIcon active={page === "menu" ?? false} />
        </Button>
      </li>
    </ul>
  );
};

const pagesMenuStyles = css({
  h: "$headerHeight",
  w: "558px",
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr",
  gap: "0.5rem",
  p: "0",
  m: "0",

  "@bp5": {
    w: "700px",
  },
});

const restIconsStyles = css({
  display: "none",

  "@bp2": {
    display: "block",
  },
});

const comunityIconStyles = css({
  display: "none",

  "@bp3": {
    display: "block",
  },
});

const linesMenuIconStyles = css({
  display: "block",

  "@bp3": {
    display: "none",
  },
});
