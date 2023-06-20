import styled from "styled-components";
import spacings from "styles/spacings";

export const _Container = styled.div`
  position: relative;

  width: 100%;
  height: 42.5px;
  border-radius: 4px;
`;

export const _Input = styled.input`
  position: absolute;

  width: 100%;
  padding: ${spacings.x1} ${spacings.x2};
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 4px;

  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const _ButtonContainer = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  right: ${spacings.x1};
  transform: translateY(-50%);
`;
