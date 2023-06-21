import * as Styled from "./styles";

const Loading = (): JSX.Element => {
  return (
    <Styled._Container>
      <Styled._Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Styled._Spinner>
    </Styled._Container>
  );
};

export default Loading;
