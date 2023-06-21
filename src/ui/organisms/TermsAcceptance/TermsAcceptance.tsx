import { Button, Column, Row } from "ui/atoms";
import { LongTextBox } from "ui/molecules";

import terms from "./data";
import { useModal } from "hooks";
import DealerInfo from "../DealerInfo";
import { User } from "@prisma/client";

type Props = {
  data: User;
};

const TermsAcceptance = ({ data }: Props): JSX.Element => {
  const { openModal } = useModal();

  const onAcceptTerms = () => {
    openModal(<DealerInfo data={data} />, {
      title: "Ver informações de contato",
      variant: "dark",
      width: "800px",
    });
  };

  return (
    <Column pl="x3" pr="x3" pt="x2" pb="x4">
      <Row fullWidth>
        <LongTextBox>{terms}</LongTextBox>
      </Row>

      <Row fullWidth pt="x3" justifyContent="flex-end">
        <Button variant="primary" onClick={onAcceptTerms}>
          Aceitar termos e prosseguir
        </Button>
      </Row>
    </Column>
  );
};

export default TermsAcceptance;
