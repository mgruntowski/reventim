import { Button } from "ui/atoms";
import * as Styled from "./styles";
import { withBoxProps } from "hocs";

type Props = {
  className?: string;
  placeholder?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const Input = ({
  className,
  placeholder,
  buttonLabel,
  onButtonClick,
}: Props): JSX.Element => {
  return (
    <Styled._Container className={className}>
      <Styled._Input placeholder={placeholder} />

      <Styled._ButtonContainer>
        {buttonLabel && (
          <Button variant="text" onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        )}
      </Styled._ButtonContainer>
    </Styled._Container>
  );
};

export default withBoxProps(Input);
