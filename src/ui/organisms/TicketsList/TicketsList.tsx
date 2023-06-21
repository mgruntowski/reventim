import { Button, Column, Row } from "ui/atoms";
import Ticket from "./components/Ticket";

const TicketsList = (): JSX.Element => {
  return (
    <Column pl="x3" pr="x3" pt="x2" pb="x4" gap="x1">
      <Ticket data={{ createdAt: "15 mai 2015", eventName: "Foo Fighters" }} />
      <Ticket data={{ createdAt: "15 mai 2015", eventName: "Foo Fighters" }} />
      <Ticket data={{ createdAt: "15 mai 2015", eventName: "Foo Fighters" }} />
      <Ticket data={{ createdAt: "15 mai 2015", eventName: "Foo Fighters" }} />
      <Ticket data={{ createdAt: "15 mai 2015", eventName: "Foo Fighters" }} />

      <Row fullWidth justifyContent="flex-end">
        <Button variant="primary" onClick={() => {}} mt="x3">
          Cadastrar ingresso
        </Button>
      </Row>
    </Column>
  );
};

export default TicketsList;
