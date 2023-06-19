import { Button } from "ui/atoms";
import * as Styled from "./styles";

type Props = {
  placeholder?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const Input = ({
  placeholder,
  buttonLabel,
  onButtonClick,
}: Props): JSX.Element => {
  return (
    <Styled._Container>
      <Styled._Input placeholder={placeholder} />

      <Styled._ButtonContainer>
        <Button variant="text" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </Styled._ButtonContainer>
    </Styled._Container>
  );
};

export default Input;
