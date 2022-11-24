import { Main } from "../components/main/main";
import { Sidebar } from "../components/sidebar/sidebar";
import { PeopleGallery } from "../components/people-gallery/people-gallery";
import { Card, PersonProps } from "../components/card/card";
import { Header } from "../components/header/header";
import { Fragment } from "react";
import { css } from "../styles/stitches.config";

const Home = ({ data }: DataProps) => {
  const { results } = data;
  const user = results[0];
  const friends = results.slice(1);

  return (
    <Fragment>
      <Header user={user} />
      <Main>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "360px auto",
          })()}
        >
          <Sidebar />
          <PeopleGallery>
            {friends.map((person) => (
              <Card data={person} />
            ))}
          </PeopleGallery>
        </div>
      </Main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch("https://randomuser.me/api/?results=37");

  const result = await response.json();

  return {
    props: { data: result },
  };
}

type DataProps = {
  data: {
    results: PersonProps[];
  };
};
