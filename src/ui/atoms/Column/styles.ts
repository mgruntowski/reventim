import styled from "styled-components";

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
};

export const _Column = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems = "center" }) => alignItems};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};

  flex: ${({ flex = 1 }) => flex};
`;
