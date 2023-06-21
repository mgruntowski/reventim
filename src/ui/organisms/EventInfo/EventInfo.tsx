import { Event, Prisma } from "@prisma/client";
import { Column, Row } from "ui/atoms";

import * as Styled from "./styles";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useModal } from "hooks";
import AvailableTickets from "../AvailableTickets";

type Props = {
  data: Prisma.EventGetPayload<{
    include: {
      sections: {
        include: {
          batches: { include: { tickets: { include: { user: true } } } };
        };
      };
    };
  }>;
};

const EventInfo = ({ data }: Props): JSX.Element => {
  const { openModal } = useModal();

  const onBatchClick = (sectionId: string, batchId: string) => {
    const section = data.sections.find(
      (section) => section.sectionId === sectionId
    );
    const batch = section.batches.find((batch) => batch.batchId === batchId);

    openModal(<AvailableTickets data={batch.tickets} eventName={data.name} />, {
      title: `${section.name} - ${batch.name}`,
      variant: "dark",
      width: "1000px",
    });
  };

  return (
    <Row fullWidth alignItems="flex-start" gap="x2">
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

      <Column gap="x05">
        {data.sections.map((section) =>
          section.batches.map((batch) => (
            <Styled._EventItem
              key={`${section.sectionId}-${batch.batchId}`}
              fullWidth
              pt="x1"
              pb="x1"
              pl="x2"
              pr="x2"
              onClick={() => onBatchClick(section.sectionId, batch.batchId)}
            >
              <span>
                {section.name} - {batch.name}
              </span>

              <span>
                {(batch.price / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </Styled._EventItem>
          ))
        )}
      </Column>
    </Row>
  );
};

export default EventInfo;
