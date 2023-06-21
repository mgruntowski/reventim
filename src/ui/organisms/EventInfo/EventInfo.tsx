import { Event } from "interfaces";
import { Column, Row } from "ui/atoms";

import * as Styled from "./styles";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
  data: Event;
};

const EventInfo = ({ data }: Props): JSX.Element => {
  console.log("data ->", data);

  return (
    <Row fullWidth>
      <Column maxWidth="384px" alignItems="flex-start">
        <Styled._ImageContainer>
          <Image layout="fill" objectFit="cover" src={data.pictureUrl} />
        </Styled._ImageContainer>

        <Styled._EventName>{data.name}</Styled._EventName>

        <Styled._EventDetails>
          Data:{" "}
          {format(new Date(data.date), "dd MMM yyyy - iiii", {
            locale: ptBR,
          })}
        </Styled._EventDetails>

        <Styled._EventDetails>
          Horário: {format(new Date(data.date), "HH:mm", { locale: ptBR })}
        </Styled._EventDetails>

        <Styled._EventDetails>Local: {data.locationName}</Styled._EventDetails>

        <Styled._EventDetails>
          Endereço: {data.street}, {data.number} - {data.neighborhood}
        </Styled._EventDetails>

        <Styled._EventDetails>
          Cidade: {data.city} - {data.federalUnit}
        </Styled._EventDetails>
      </Column>

      <Column></Column>
    </Row>
  );
};

export default EventInfo;
