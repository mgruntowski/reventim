import { Column } from "ui/atoms";
import EventItem from "./components/EventItem";

import { Event } from "interfaces";

type Props = {
  data: Event[];
};

const EventsList = ({ data }: Props): JSX.Element => {
  return (
    <Column gap="x05">
      {data.map((event) => (
        <EventItem key={event.eventId} data={event} />
      ))}
    </Column>
  );
};

export default EventsList;
