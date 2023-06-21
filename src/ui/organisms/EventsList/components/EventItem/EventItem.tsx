import { Column } from "ui/atoms";
import * as Styled from "./styles";

const EventItem = (): JSX.Element => {
  return (
    <Styled._Container pt="x1" pb="x1" fullWidth>
      <Column maxWidth="200px"></Column>

      <Column alignItems="flex-start">
        <Styled._EventName>Foo Fighters</Styled._EventName>
        <Styled._EventDetails>07 set 2023 - Qui 21:00</Styled._EventDetails>
        <Styled._EventDetails>
          Estádio Couto Pereira - Curitiba - PR
        </Styled._EventDetails>
      </Column>

      <Column></Column>
    </Styled._Container>
  );
};

export default EventItem;
