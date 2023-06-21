import styled, { keyframes } from "styled-components";

const spinnerKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const _Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const _Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    animation: ${spinnerKeyframe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.blue} transparent transparent
      transparent;
  }

  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
