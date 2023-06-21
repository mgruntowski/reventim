import styled, { css } from "styled-components";
import spacings from "styles/spacings";

export const _Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 4px;
`;

export const _Input = styled.input<{ withError?: boolean }>`
  width: 100%;
  height: 42.5px;
  padding: ${spacings.x1} ${spacings.x2};
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;

  font-size: 16px;

  transition: border-color 0.2s;

  ${({ withError = false }) =>
    withError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;

export const _ButtonContainer = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  right: ${spacings.x1};
  transform: translateY(-50%);
`;

export const _Label = styled.label`
  margin-bottom: ${spacings.x05};
  font-size: 14px;

  text-transform: uppercase;
`;

export const _SecondaryLabel = styled.span`
  color: ${({ theme }) => theme.colors.grey};

  text-transform: none;
`;

export const _ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.red};

  font-size: 14px;
`;
