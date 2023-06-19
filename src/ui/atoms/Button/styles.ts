import styled, { css } from "styled-components";

export const buttonVariants = {
  text: css`
    background-color: transparent;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
  `,
};

export const _Button = styled.button<{ variant: keyof typeof buttonVariants }>`
  border: none;

  ${({ variant }) => buttonVariants[variant]};
`;
