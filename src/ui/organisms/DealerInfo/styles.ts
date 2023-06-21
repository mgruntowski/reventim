import styled from "styled-components";
import spacings from "styles/spacings";

export const _InfoTitle = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
`;

export const _InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: ${spacings.x2};
`;
