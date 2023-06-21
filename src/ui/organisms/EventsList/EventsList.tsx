import { Event } from "@prisma/client";
import { useRouter } from "next/router";

import { Column } from "ui/atoms";

import EventItem from "./components/EventItem";

type Props = {
  data: Event[];
};

const EventsList = ({ data }: Props): JSX.Element => {
  const router = useRouter();

  const goToEvent = (eventId: string) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <Column gap="x05">
      {data.map((event) => (
        <EventItem
          key={event.eventId}
          data={event}
          onClick={() => goToEvent(event.eventId)}
        />
      ))}
    </Column>
  );
};

export default EventsList;
