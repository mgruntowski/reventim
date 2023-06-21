import styled from "styled-components";

import { Row } from "ui/atoms";

export const _Container = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};

  cursor: pointer;
`;

export const _EventName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
`;

export const _EventDetails = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`;

export const _ImageContainer = styled.div`
  position: relative;
  height: 108px;
  width: 200px;
`;
