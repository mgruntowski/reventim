import { useModal } from "hooks";
import { Button, Column, Divider, Row } from "ui/atoms";
import { Input } from "ui/molecules";
import SignUpForm from "../SignUpForm";

const LoginForm = (): JSX.Element => {
  const { openModal, closeModal } = useModal();

  const handleCreateAccount = () => {
    closeModal();
    openModal(<SignUpForm />, {
      title: "Criar conta",
      variant: "light",
      width: "500px",
    });
  };

  return (
    <>
      <Column pl="x3" pr="x3" pt="x4" pb="x4" gap="x3">
        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" />

        <Button variant="primary" minWidth="150px" onClick={() => {}}>
          Entrar
        </Button>
      </Column>

      <Column pl="x3" pr="x3" pb="x4" gap="x1">
        <Divider />

        <Row fullWidth>
          <span>Não possui cadastro?</span>

          <Button variant="text" onClick={handleCreateAccount}>
            Criar conta
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default LoginForm;
