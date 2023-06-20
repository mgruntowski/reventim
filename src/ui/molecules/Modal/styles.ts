import styled, { css } from "styled-components";
import spacings from "styles/spacings";

const modalVariants = {
  dark: {
    container: css`
      background-color: ${({ theme }) => theme.colors.darkBlue};
    `,
    title: css`
      font-weight: 700;
      text-align: start;
      color: ${({ theme }) => theme.colors.white};
      margin-left: ${spacings.x3};
      margin-top: ${spacings.x4};
    `,
    closeButton: css`
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      font-size: 48px;
      line-height: 30px;
      height: 30px;
    `,
  },
  light: {
    container: css`
      background-color: ${({ theme }) => theme.colors.white};
    `,
    title: css`
      font-weight: 300;
      margin-top: ${spacings.x5};
      text-align: center;
      color: ${({ theme }) => theme.colors.black};
    `,
    closeButton: css`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 500;
      font-size: 32px;
      line-height: 20px;
      height: 20px;
    `,
  },
};

export type StyleProps = {
  variant?: keyof typeof modalVariants;
  width?: string;
};

export const _Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const _Container = styled.div<StyleProps>`
  position: relative;

  width: ${({ width = "1200px" }) => width};
  max-width: 95%;
  max-height: 95%;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  ${({ variant = "light" }) => modalVariants[variant].container};
`;

export const _Title = styled.h1<StyleProps>`
  font-size: 26px;
  text-transform: uppercase;

  ${({ variant = "light" }) => modalVariants[variant].title}
`;

export const _CloseButton = styled.button<StyleProps>`
  position: absolute;
  top: ${spacings.x4};
  right: ${spacings.x3};

  border: none;
  padding: 0;

  background-color: transparent;

  overflow: hidden;
  cursor: pointer;

  ${({ variant = "light" }) => modalVariants[variant].closeButton};
`;
