import { useState } from "react";
import { css } from "../../../../../styles/stitches.config";
import { Button } from "../../../../button";
import { DotsMenuIcon } from "../../../../icons/dots-menu-icon";
import { MenssegerIcon } from "../../../../icons/mensseger-icon";
import { NotificationsIcon } from "../../../../icons/notifications-icon";

export const UserMenu = () => {
  const [userMenuState, setUserMenuState] = useState("");

  return (
    <ul className={userMenuStyles()}>
      <li>
        <Button
          variant="round"
          onClick={() => setUserMenuState("menu")}
          active={userMenuState === "menu" ?? false}
        >
          <DotsMenuIcon active={userMenuState === "menu" ?? false} />
        </Button>
      </li>
      <li>
        <Button
          variant="round"
          onClick={() => setUserMenuState("mensseger")}
          active={userMenuState === "mensseger" ?? false}
        >
          <MenssegerIcon active={userMenuState === "mensseger" ?? false} />
        </Button>
      </li>
      <li>
        <Button
          variant="round"
          onClick={() => setUserMenuState("notifications")}
          active={userMenuState === "notifications" ?? false}
        >
          <NotificationsIcon
            active={userMenuState === "notifications" ?? false}
          />
        </Button>
      </li>
      <li>
        <Button
          variant="round"
          onClick={() => setUserMenuState("menu")}
          active={userMenuState === "menu" ?? false}
        >
          <img
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            height={40}
            width={40}
            style={{ borderRadius: "50%" }}
          />
          {/*TODO*/}
        </Button>
      </li>
    </ul>
  );
};

const userMenuStyles = css({
  w: "184px",
  listStyle: "none",
  display: "flex",
  justifyContent: "end",
  gap: "0.5rem",
  p: "0",

  "@bp4": {
    w: "264px",
  },
});
