import { Control, Controller } from "react-hook-form";

import { Button } from "ui/atoms";
import { withBoxProps } from "hocs";

import * as Styled from "./styles";

type Props = {
  className?: string;
  placeholder?: string;
  label?: string;
  secondaryLabel?: string;
  buttonLabel?: string;
  name: string;
  type?: "email" | "search" | "text" | "password";
  onButtonClick?: () => void;
  control?: Control<any, any>;
  error?: string;
  maxLength?: number;
};

const Input = ({
  className,
  placeholder,
  label,
  secondaryLabel,
  name,
  type = "text",
  buttonLabel,
  onButtonClick,
  control,
  error,
  maxLength,
}: Props): JSX.Element => {
  return (
    <Styled._Container className={className}>
      {label && (
        <Styled._Label htmlFor={name}>
          {label}
          {secondaryLabel && (
            <Styled._SecondaryLabel> {secondaryLabel}</Styled._SecondaryLabel>
          )}
        </Styled._Label>
      )}

      {control ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, onBlur } }) => (
            <Styled._Input
              name={name}
              placeholder={placeholder}
              type={type}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              withError={!!error}
              maxLength={maxLength}
            />
          )}
        />
      ) : (
        <Styled._Input
          name={name}
          placeholder={placeholder}
          type={type}
          withError={!!error}
          maxLength={maxLength}
        />
      )}

      {error && <Styled._ErrorText>{error}</Styled._ErrorText>}

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
