import styled from "styled-components";
import spacings from "styles/spacings";

export const _Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: ${spacings.x2} ${spacings.x2};
  max-height: 400px;

  overflow: scroll;
  white-space: pre-line;
`;
