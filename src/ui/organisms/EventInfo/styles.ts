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
  line-height: 30px;
  margin-top: ${spacings.x2};
  margin-bottom: ${spacings.x1};
`;

export const _EventDetails = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

export const _EventItem = styled(Row)`
  background-color: ${({ theme }) => theme.colors.blueGrey};
  cursor: pointer;

  & > span {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }
`;
