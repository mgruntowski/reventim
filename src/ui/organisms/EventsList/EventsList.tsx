import { Column } from "ui/atoms";
import EventItem from "./components/EventItem";

const EventsList = (): JSX.Element => {
  return (
    <Column gap="x05">
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
    </Column>
  );
};

export default EventsList;
