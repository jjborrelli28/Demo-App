import { styled } from "../../styles/stitches.config";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <HeadingContainer>
        <h1>Friends</h1>
        <i
          data-visualcompletion="css-img"
          className="x1b0d499 xaj1gnb"
          style={{
            backgroundImage:
              "url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/Drmr9rfJi3Y.png?_nc_eui2=AeEGa4kTnTYBdfREjeszudwhGgXD2-x2F5waBcPb7HYXnJhtsEh6ThWOY3z5FIyx_K770AdrJIgzYzcQiZTmXhT9)",
            backgroundPosition: "-147px -145px",
            backgroundSize: "189px 234px",
            width: "20px",
            height: "20px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
          }}
        ></i>
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
