import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";

import { useModal } from "hooks";
import { useUserStore } from "stores";
import { Button, Column, Row } from "ui/atoms";
import { Input } from "ui/molecules";

import LoginForm from "../LoginForm";
import * as Styled from "./styles";
import TicketsList from "../TicketsList";

const Header = (): JSX.Element => {
  const { openModal } = useModal();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");

    if (!user && localStorageUser) {
      setUser(JSON.parse(localStorageUser));
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
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logout realizado com sucesso!");
  };

  const handleMyTickets = () => {
    openModal(<TicketsList />, {
      title: "Meus ingressos",
      variant: "dark",
      width: "1000px",
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
            name="search"
            placeholder="Pesquise por artistas e eventos..."
            buttonLabel="Pesquisar"
          />
        </Column>

        {user ? (
          <Column alignItems="flex-end">
            <Row gap="x2">
              <Button variant="text" onClick={handleMyTickets}>
                Meus ingressos
              </Button>

              <Button variant="text" onClick={handleLogout}>
                Sair
              </Button>
            </Row>
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
