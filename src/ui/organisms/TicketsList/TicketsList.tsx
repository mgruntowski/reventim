import { Ticket as ITicket, Prisma } from "@prisma/client";

import Ticket from "./components/Ticket";

type Props = {
  data:
    | ITicket[]
    | Prisma.TicketGetPayload<{
        include: {
          batch: { include: { section: { include: { event: true } } } };
        };
      }>[];
  eventName?: string;
  buttonLabel: string;
  onButtonClick: (ticketId: string) => void;
};

const TicketsList = ({
  data,
  eventName,
  buttonLabel,
  onButtonClick,
}: Props): JSX.Element => (
  <>
    {data.slice(0, 10).map(
      (
        ticket: Prisma.TicketGetPayload<{
          include: {
            batch: { include: { section: { include: { event: true } } } };
          };
        }>
      ) => (
        <Ticket
          key={ticket.ticketId}
          data={ticket}
          eventName={eventName || ticket.batch.section.event.name}
          buttonLabel={buttonLabel}
          onButtonClick={() => onButtonClick(ticket.ticketId)}
        />
      )
    )}
  </>
);

export default TicketsList;
