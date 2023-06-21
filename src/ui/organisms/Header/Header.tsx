import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";

import { useLocalStorage, useModal } from "hooks";
import { useUserStore } from "stores";
import { Button, Column, Row } from "ui/atoms";
import { Input } from "ui/molecules";

import LoginForm from "../LoginForm";
import * as Styled from "./styles";

const Header = (): JSX.Element => {
  const { openModal } = useModal();
  const { user, setUser } = useUserStore();
  const [localStorageUser, setLocalStorageUser] = useLocalStorage("user", {});

  useEffect(() => {
    if (!user && localStorageUser) {
      setUser(localStorageUser);
    }
  }, []);

  const handleLogin = () => {
    openModal(<LoginForm />, {
      title: "Login",
      variant: "light",
      width: "500px",
    });
  };

  const handleLogout = () => {
    setLocalStorageUser("");
    setUser(null);
    toast.success("Logout realizado com sucesso!");
  };

  const handleMyTickets = () => {};

  return (
    <Styled._Header>
      <Row>
        <Column alignItems="flex-start">
          <Image width="200px" height="57px" src="/img/reventim-logo.png" />
        </Column>

        <Column flex={2}>
          <Input
            name="search"
            placeholder="Pesquise por artistas e eventos..."
            buttonLabel="Pesquisar"
          />
        </Column>

        {user ? (
          <Column alignItems="flex-end">
            <Button variant="text" onClick={handleMyTickets}>
              Meus ingressos
            </Button>

            <Button variant="text" onClick={handleLogout}>
              Sair
            </Button>
          </Column>
        ) : (
          <Column alignItems="flex-end">
            <Button variant="text" onClick={handleLogin}>
              Fazer login
            </Button>
          </Column>
        )}
      </Row>
    </Styled._Header>
  );
};

export default Header;
