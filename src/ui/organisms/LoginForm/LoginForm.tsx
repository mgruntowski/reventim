import { Button, Column, Divider, Row } from "ui/atoms";
import { Input } from "ui/molecules";

const LoginForm = (): JSX.Element => {
  return (
    <>
      <Column pl="x3" pr="x3" pt="x4" pb="x4" gap="x3">
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />

        <Button variant="primary" minWidth="150px" onClick={() => {}}>
          Entrar
        </Button>
      </Column>

      <Column pl="x3" pr="x3" pb="x4" gap="x1">
        <Divider />

        <Row fullWidth>
          <span>Não possui cadastro?</span>

          <Button variant="text" onClick={() => {}}>
            Criar conta
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default LoginForm;
