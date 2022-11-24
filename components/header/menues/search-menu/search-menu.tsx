import { css } from "../../../../styles/stitches.config";
import { Button } from "../../../button/button";
import { FacebookIcon } from "../../../icons/facebook-icon";
import { InputSearch } from "../../../inputs/input-search/input-search";

export const SearchMenu = () => {
  return (
    <div className={searchMenuStyles()}>
      <Button variant="round" onClick={() => null}>
        <FacebookIcon />
      </Button>
      <InputSearch />
    </div>
  );
};

const searchMenuStyles = css("div", {
  listStyle: "none",
  display: "flex",
  gap: "0.5rem",
  p: "0",

  "@bp2": {
    minw: "184px",
  },
});
