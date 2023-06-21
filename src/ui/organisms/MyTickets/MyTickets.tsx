import { Button, Column, Row } from "ui/atoms";
import TicketsList from "../TicketsList";
import { useUserStore } from "stores";

const MyTickets = (): JSX.Element => {
  const user = useUserStore((state) => state.user);

  return (
    <Column pl="x3" pr="x3" pt="x2" pb="x4" gap="x1">
      <TicketsList
        data={user.tickets}
        buttonLabel="Editar"
        onButtonClick={() => {}}
      />

      <Row fullWidth justifyContent="flex-end">
        <Button variant="primary" onClick={() => {}} mt="x3">
          Cadastrar ingresso
        </Button>
      </Row>
    </Column>
  );
};

export default MyTickets;
