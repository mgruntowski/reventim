import styled from "styled-components";

import { Row } from "ui/atoms";

export const _Container = styled(Row)`
  background-color: ${({ theme }) => theme.colors.blueGrey};
`;

export const _Date = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
`;

export const _EventName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;
