import { css, styled } from "../../styles/stitches.config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

export const Card = ({ data }: CardProps) => {
  return (
    <CardContainer>
      <Image
        alt={`${data.name.first} ${data.name.last}`}
        loader={() => data.picture.large}
        src={data.picture.large}
        layout="responsive"
        height={240}
        width={240}
        className={imageStyles()}
      />
      <BodyCard>
        <Link href="#">
          <a>
            {data.name.first} {data.name.last}
          </a>
        </Link>
        <ActionsContainer>
          <Button variant="primary" onClick={() => null}>
            Add Friend
          </Button>
          <Button variant="secondary" onClick={() => null}>
            Remove
          </Button>
        </ActionsContainer>
      </BodyCard>
    </CardContainer>
  );
};

const CardContainer = styled("div", {
  b: "solid $gainsboro 1px",
  bra: "$2",
  "-webkit-box-shadow": "0px 1.5px 3px 3px rgba(218,220,225,1)",
  "-moz-box-shadow": "0px 1.5px 3px 3px rgba(218,220,225,1)",
  "box-shadow": "0px 1.5px 3px 3px rgba(218,220,225,1)",

  a: {
    color: "black",
    fontFamily: "Arial",
    fontSize: "$1",
    fontWeight: "$4",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  "&:hover": {
    cursor: "pointer",
  },
});

const imageStyles = css({ bra: "$2 $2 0 0" });

const BodyCard = styled("div", {
  p: "$5",
  backgroundColor: "white",
  bra: "0 0 $2 $2",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

const ActionsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

type CardProps = {
  data: PersonProps;
};

export type PersonProps = {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
};
