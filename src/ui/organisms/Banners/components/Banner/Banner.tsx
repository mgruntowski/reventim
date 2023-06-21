import { Event } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";

import * as Styled from "./styles";

type Props = {
  data: Event;
};

const Banner = ({ data }: Props): JSX.Element => {
  const router = useRouter();

  const redirectToEvent = (eventId: string) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <Styled._Container onClick={() => redirectToEvent(data.eventId)}>
      <Image layout="fill" src={data.pictureUrl} />
    </Styled._Container>
  );
};

export default Banner;
