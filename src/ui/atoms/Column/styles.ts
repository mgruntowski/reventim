import styled, { css } from "styled-components";
import spacings from "styles/spacings";

export type StyleProps = {
  flex?: number;
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  gap?: keyof typeof spacings;
  maxWidth?: string;
};

export const _Column = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems = "center" }) => alignItems};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  box-sizing: border-box;

  gap: ${({ gap = "x0" }) => spacings[gap]};

  flex: ${({ flex = 1 }) => flex};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
`;
