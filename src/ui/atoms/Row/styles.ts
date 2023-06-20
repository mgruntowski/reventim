import styled, { css } from "styled-components";
import spacings from "styles/spacings";

export type StyleProps = {
  gap?: keyof typeof spacings;
  alignItems?: "center" | "flex-end" | "flex-start";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  fullWidth?: boolean;
};

export const _Row = styled.div<StyleProps>`
  display: flex;
  align-items: ${({ alignItems = "center" }) => alignItems};
  justify-content: ${({ justifyContent = "space-between" }) => justifyContent};
  box-sizing: border-box;

  gap: ${({ gap = "x0" }) => spacings[gap]};

  ${({ fullWidth = false }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
