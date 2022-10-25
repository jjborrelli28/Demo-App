import { styled } from "../../styles/stitches.config";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeadingContainer>
        <h1>Friends</h1>
      </HeadingContainer>
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

  h1: {
    m: "$7 $6 $5 $6",
  },
});
