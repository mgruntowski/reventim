import { Button, Column } from "ui/atoms";
import * as Styled from "./styles";

type Props = {
  data: any;
};

const Ticket = ({ data }: Props): JSX.Element => {
  return (
    <Styled._Container fullWidth pl="x3" pr="x3" pt="x2" pb="x2">
      <Column alignItems="flex-start">
        <Styled._Date>Adicionado em {data.createdAt}</Styled._Date>
      </Column>

      <Column>
        <Styled._EventName>{data.eventName}</Styled._EventName>
      </Column>

      <Column alignItems="flex-end">
        <Button variant="text" onClick={() => {}}>
          Editar
        </Button>
      </Column>
    </Styled._Container>
  );
};

export default Ticket;
