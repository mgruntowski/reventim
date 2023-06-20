import Image from "next/image";

import { useModal } from "hooks";
import { Button, Column, Row } from "ui/atoms";
import { Input } from "ui/molecules";

import LoginForm from "../LoginForm";
import * as Styled from "./styles";

const Header = (): JSX.Element => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(<LoginForm />, {
      title: "Login",
      variant: "light",
      width: "500px",
    });
  };

  return (
    <Styled._Header>
      <Row>
        <Column alignItems="flex-start">
          <Image width="200px" height="57px" src="/img/reventim-logo.png" />
        </Column>

        <Column flex={2}>
          <Input
            placeholder="Pesquise por artistas e eventosoaskofjfgoaojfo2jfoa..."
            buttonLabel="Pesquisar"
          />
        </Column>

        <Column alignItems="flex-end">
          <Button variant="text" onClick={handleClick}>
            Fazer login
          </Button>
        </Column>
      </Row>
    </Styled._Header>
  );
};

export default Header;
