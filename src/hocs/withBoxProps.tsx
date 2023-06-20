import styled, { css } from "styled-components";

import spacings from "styles/spacings";

type keys = "mt" | "mb" | "ml" | "mr" | "pt" | "pb" | "pl" | "pr";

type BoxProps = {
  [key in keys]?: keyof typeof spacings;
};

const injectStyles = <P extends object>(
  Component: React.ComponentType<P>
) => styled(Component)<BoxProps>`
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${spacings[mt]};
    `}

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${spacings[mb]};
    `}

  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${spacings[ml]};
    `}

  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${spacings[mr]};
    `}

  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${spacings[pt]};
    `}

  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${spacings[pb]};
    `}

  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${spacings[pl]};
    `}

  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${spacings[pr]};
    `}
`;

const withBoxProps = <P extends object>(Component: React.ComponentType<P>) =>
  injectStyles(Component);

export default withBoxProps;
