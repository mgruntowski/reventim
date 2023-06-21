import { Event } from "@prisma/client";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Column } from "ui/atoms";

import * as Styled from "./styles";

type Props = {
  data: Event;
  onClick: () => void;
};

const EventItem = ({ data, onClick }: Props): JSX.Element => (
  <Styled._Container fullWidth gap="x2" onClick={onClick}>
    <Column maxWidth="200px">
      <Styled._ImageContainer>
        <Image layout="fill" objectFit="cover" src={data.pictureUrl} />
      </Styled._ImageContainer>
    </Column>

    <Column alignItems="flex-start" pt="x2" pb="x2">
      <Styled._EventName>{data.name}</Styled._EventName>
      <Styled._EventDetails>
        {format(new Date(data.date), "dd MMM yyyy - iii - HH:mm", {
          locale: ptBR,
        })}
      </Styled._EventDetails>
      <Styled._EventDetails>
        {data.locationName} - {data.city} - {data.federalUnit}
      </Styled._EventDetails>
    </Column>

    <Column></Column>
  </Styled._Container>
);

export default EventItem;
