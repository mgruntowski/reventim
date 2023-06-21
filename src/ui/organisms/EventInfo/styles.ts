import styled from "styled-components";
import spacings from "styles/spacings";
import { Row } from "ui/atoms";

export const _ImageContainer = styled.div`
  position: relative;
  width: 384px;
  height: 216px;
`;

export const _EventName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  margin-top: ${spacings.x2};
`;

export const _EventDetails = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

export const _EventItem = styled(Row)`
  background-color: ${({ theme }) => theme.colors.blueGrey};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
`;
