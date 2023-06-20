import styled from "styled-components";

export const _Container = styled.div`
  position: relative;
  height: 400px;
  width: 316px;
  overflow: visible;
  cursor: pointer;

  transition: transform 0.2s, box-shadow 0.5s;

  &:hover {
    transform: scale(1.025);

    box-shadow: 0px 0px 25px 0px ${({ theme }) => theme.colors.blue};
    z-index: 2;

    * > img {
      filter: grayscale(0%) !important;
    }
  }
`;
