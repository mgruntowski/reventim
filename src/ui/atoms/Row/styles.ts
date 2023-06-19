import styled from "styled-components";
import spacings from "styles/spacings";

export type StyleProps = {
  gap?: keyof typeof spacings;
};

export const _Row = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: ${({ gap = "x0" }) => gap};
`;
