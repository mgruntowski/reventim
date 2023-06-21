import { Button, Column, Row } from "ui/atoms";

import Banner from "./components/Banner";
import * as Styled from "./styles";
import { useRouter } from "next/router";
import { Event } from "interfaces";

type Props = {
  data: Event[];
};

const Banners = ({ data }: Props): JSX.Element => {
  const router = useRouter();

  const redirectToAllEvents = () => {
    router.push("/events");
  };

  return (
    <Column>
      <Styled._Container justifyContent="center">
        <Row justifyContent="flex-start" gap="x025">
          {data.map((event) => (
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
