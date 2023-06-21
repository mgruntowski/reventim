import { Prisma } from "@prisma/client";

import { useModal } from "hooks";
import { Column } from "ui/atoms";

import TermsAcceptance from "../TermsAcceptance";
import TicketsList from "../TicketsList";

type Props = {
  data: Prisma.TicketGetPayload<{
    include: {
      user: true;
    };
  }>[];
  eventName: string;
};

const AvailableTickets = ({ data, eventName }: Props): JSX.Element => {
  const { openModal } = useModal();

  const onTicketClick = (ticketId: string) => {
    const ticket = data.find((ticket) => ticket.ticketId === ticketId);

    openModal(<TermsAcceptance data={ticket.user} />, {
      title: "Ver informações de contato",
      variant: "dark",
      width: "1000px",
    });
  };

  return (
    <Column pl="x3" pr="x3" pt="x2" pb="x4" gap="x1">
      <TicketsList
        data={data}
        eventName={eventName}
        buttonLabel="Ver informações de contato"
        onButtonClick={onTicketClick}
      />
    </Column>
  );
};

export default AvailableTickets;
