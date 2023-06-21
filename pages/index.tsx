import { Event } from "@prisma/client";
import { GetStaticProps } from "next";

import { Banners } from "ui/organisms";

type Props = {
  data: Event[];
};

const Home = ({ data }: Props): JSX.Element => <Banners data={data} />;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://reventim.vercel.app/api/events");
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};

export default Home;
