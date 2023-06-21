import { Event } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";

import { EventInfo } from "ui/organisms";

type Props = {
  data: Event;
};

const EventById = ({ data }: Props): JSX.Element => <EventInfo data={data} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://reventim.vercel.app/api/events");
  const data = await response.json();

  const paths = data.map((event: Event) => ({
    params: { eventId: event.eventId },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://reventim.vercel.app/api/events/${params.eventId}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};

export default EventById;
