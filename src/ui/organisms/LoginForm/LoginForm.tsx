import { useLoading, useLocalStorage, useModal } from "hooks";
import { Button, Column, Divider, Row } from "ui/atoms";
import { Input } from "ui/molecules";
import SignUpForm from "../SignUpForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginValidation from "./validations";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useUserStore } from "stores";

const LoginForm = (): JSX.Element => {
  const { openModal, closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const userStore = useUserStore();

  const [_, setUser] = useLocalStorage("user", {});

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(loginValidation),
  });

  const handleCreateAccount = () => {
    closeModal();
    openModal(<SignUpForm />, {
      title: "Criar conta",
      variant: "light",
      width: "500px",
    });
  };

  const onValidationSuccess = async (values) => {
    showLoading();

    try {
      const res = await axios.post("/api/auth", {
        email: values.email,
        password: values.password,
      });

      const { nickname, firstName, userId } = res.data;

      setUser({ nickname, firstName, userId });
      userStore.setUser({ nickname, firstName, userId });
      closeModal();

      toast.success("Login efetuado com sucesso!");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      hideLoading();
    }
  };

  const onValidationError = () => {
    toast.error("Preencha os dados da conta corretamente.");
  };

  return (
    <>
      <Column pl="x3" pr="x3" pt="x4" pb="x4" gap="x3">
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <Input
          control={control}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button
          variant="primary"
          minWidth="150px"
          onClick={handleSubmit(onValidationSuccess, onValidationError)}
        >
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
