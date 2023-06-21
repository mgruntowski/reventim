import events from "mocks/events";
import { Button, Column, Row } from "ui/atoms";

import Banner from "./components/Banner";
import * as Styled from "./styles";
import { useRouter } from "next/router";

const Banners = (): JSX.Element => {
  const router = useRouter();

  const redirectToAllEvents = () => {
    router.push("/events");
  };

  return (
    <Column>
      <Styled._Container justifyContent="center">
        <Row justifyContent="flex-start" gap="x025">
          {events.map((event) => (
            <Banner key={event.eventId} data={event} />
          ))}
        </Row>
      </Styled._Container>

      <Row fullWidth justifyContent="flex-end">
        <Button mt="x2" variant="text" onClick={redirectToAllEvents}>
          {"Ver todos os eventos >"}
        </Button>
      </Row>
    </Column>
  );
};

export default Banners;
