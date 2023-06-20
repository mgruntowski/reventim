import { Button, Column, Row } from "ui/atoms";
import { Input } from "ui/molecules";

import * as Styled from "./styles";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <Styled._Header>
      <Row>
        <Column alignItems="flex-start">
          <Image width="200px" height="57px" src="/img/reventim-logo.png" />
        </Column>

        <Column flex={2}>
          <Input
            placeholder="Pesquise por artistas e eventos..."
            buttonLabel="Pesquisar"
          />
        </Column>

        <Column alignItems="flex-end">
          <Button variant="text" onClick={() => {}}>
            Fazer login
          </Button>
        </Column>
      </Row>
    </Styled._Header>
  );
};

export default Header;
