import { Ticket } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button, Column } from "ui/atoms";

import * as Styled from "./styles";

type Props = {
  data: Ticket;
  eventName: string;
  buttonLabel: string;
  onButtonClick: () => void;
};

const Ticket = ({
  data,
  eventName,
  buttonLabel,
  onButtonClick,
}: Props): JSX.Element => (
  <Styled._Container fullWidth pl="x3" pr="x3" pt="x2" pb="x2">
    <Column alignItems="flex-start">
      <Styled._Date>
        Adicionado em{" "}
        {format(new Date(data.createdAt), "dd MMM yyyy", { locale: ptBR })}
      </Styled._Date>
    </Column>

    <Column flex={2}>
      <Styled._EventName>{eventName}</Styled._EventName>
    </Column>

    <Column alignItems="flex-end">
      <Button variant="text" onClick={onButtonClick}>
        {buttonLabel}
      </Button>
    </Column>
  </Styled._Container>
);

export default Ticket;
