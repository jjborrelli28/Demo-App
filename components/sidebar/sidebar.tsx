import { styled } from "../../styles/stitches.config";
import { Button } from "../button/button";
import { FriendRequestsIcon } from "../icons/friend-requests-icon";
import { FriendHomeIcon } from "../icons/friend-home-icon";
import { SettingsIcon } from "../icons/settings-icon";
import { Item } from "./item/item";
import { Suggestions } from "../icons/suggestions";
import { AllFriendsIcon } from "../icons/all-friends-icon";
import { BirthdaysIcon } from "../icons/birthdays-icon";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeadingContainer>
        <h1>Friends </h1>
        <Button variant="small-round" onClick={() => null}>
          <SettingsIcon />
        </Button>
      </HeadingContainer>
      <Column>
        <Item active={true}>
          <FriendHomeIcon active={true} />
          &nbsp;&nbsp;Home
        </Item>
        <Item active={false}>
          <FriendRequestsIcon />
          &nbsp;&nbsp;Friend Requests
        </Item>
        <Item active={false}>
          <Suggestions />
          &nbsp;&nbsp;Suggestions
        </Item>
        <Item active={false}>
          <AllFriendsIcon />
          &nbsp;&nbsp;All friends
        </Item>
        <Item active={false}>
          <BirthdaysIcon />
          &nbsp;&nbsp;Birthdays
        </Item>
        <Item active={false}>
          <AllFriendsIcon />
          &nbsp;&nbsp;Custom List
        </Item>
      </Column>
    </SidebarContainer>
  );
};

export const SidebarContainer = styled("aside", {
  h: "$full",
  w: "360px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
});

const HeadingContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  m: "$7 $6 $5 $6",

  h1: {
    m: "$0",
  },
});

const Column = styled("ul", {
  listStyle: "none",
  p: "$0 $4 $0 $4",
  m: "$0",
});
