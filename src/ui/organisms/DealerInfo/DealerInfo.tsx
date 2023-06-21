import { User } from "@prisma/client";

import { formatPhone } from "utils/phone";
import { Column, Row } from "ui/atoms";

import * as Styled from "./styles";

type Props = {
  data: User;
};

const DealerInfo = ({ data }: Props): JSX.Element => (
  <Row fullWidth>
    <Column pt="x4" pb="x4">
      <Styled._InfoTitle>Nome completo</Styled._InfoTitle>
      <Styled._InfoValue>{`${data.firstName} ${data.lastName}`}</Styled._InfoValue>

      <Styled._InfoTitle>Telefone</Styled._InfoTitle>
      <Styled._InfoValue>{formatPhone(data.phone)}</Styled._InfoValue>

      <Styled._InfoTitle>E-mail</Styled._InfoTitle>
      <Styled._InfoValue>{data.email}</Styled._InfoValue>
    </Column>
  </Row>
);

export default DealerInfo;
