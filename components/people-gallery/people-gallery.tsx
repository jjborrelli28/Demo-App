import { css, styled } from "../../styles/stitches.config";
import { PropsWithChildren } from "react";
import Link from "next/link";

export const PeopleGallery = ({ children }: PropsWithChildren) => {
  return (
    <PeopleGalleryContainer>
      <span
        className={css({
          display: "flex",
          justifyContent: "space-between",
          px: "$6",

          a: {
            color: "$blueCrayola",
            textDecoration: "none",
            h: "36px",
            w: "66px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bra: "$1",

            "&:hover": {
              backgroundColor: "$gainsboro",
            },
          },
        })()}
      >
        <h2>People You May Know</h2>
        <Link href="#">
          <a>See all</a>
        </Link>
      </span>
      <PeopleGrid>{children}</PeopleGrid>
    </PeopleGalleryContainer>
  );
};

const PeopleGalleryContainer = styled("article", {
  w: "auto",
  p: "$7",
  display: "flex",
  flexDirection: "column",

  h2: {
    pb: "$6",
    m: "0",
    fontFamily: "Arial",
    fontSize: "$2",
  },
});

export const PeopleGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridTemplateRows: "auto",
  gap: "$5",
  w: "$full",
  px: "$6",

  "@bp1": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@bp2": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@bp3": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },

  "@bp4": {
    gridTemplateColumns: "repeat(5, 1fr)",
  },

  "@bp5": {
    gridTemplateColumns: "repeat(6, 1fr)",
  },
});
