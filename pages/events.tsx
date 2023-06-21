import axios from "axios";
import { GetServerSideProps } from "next";

import { EventsList } from "ui/organisms";

const Events = (): JSX.Element => {
  return <EventsList />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://reventim.vercel.app/api/events");

  console.log("response ->", response);

  return {
    props: {},
  };
};

export default Events;
