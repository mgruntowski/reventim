import styled, { css } from "styled-components";
import spacings from "styles/spacings";

export const buttonVariants = {
  text: css`
    background-color: transparent;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    padding: ${spacings.x1} ${spacings.x2};
  `,
};

export type StyleProps = {
  variant: keyof typeof buttonVariants;
  minWidth?: string;
};

export const _Button = styled.button<StyleProps>`
  border: none;
  border-radius: 8px;

  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `};

  ${({ variant }) => buttonVariants[variant]};
`;
