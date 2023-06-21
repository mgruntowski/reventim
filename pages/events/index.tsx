import { GetStaticProps } from "next";

import { Event } from "interfaces";
import { EventsList } from "ui/organisms";

type Props = {
  data: Event[];
};

const Events = ({ data }: Props): JSX.Element => <EventsList data={data} />;

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

export default Events;
