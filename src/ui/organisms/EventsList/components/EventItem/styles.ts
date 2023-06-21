import styled from "styled-components";
import spacings from "styles/spacings";
import { Row } from "ui/atoms";

export const _Container = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const _EventName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
`;

export const _EventDetails = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`;
