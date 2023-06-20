import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useModal } from "hooks";
import { Button, Column, Row } from "ui/atoms";
import { Input } from "ui/molecules";
import { formatDate } from "utils/date";
import { onlyNumbers } from "utils/string";

import signUpValidation from "./validations";
import { CPF_FORMATTED_LENGTH, formatCpf } from "utils/document";
import { formatPhone } from "utils/phone";
import { parse } from "date-fns";

const SignUpForm = (): JSX.Element => {
  const { closeModal } = useModal();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      cpf: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onBlur",
    resolver: yupResolver(signUpValidation),
  });

  const watchBirthDate = watch("birthDate");
  const watchCpf = watch("cpf");
  const watchPhone = watch("phone");

  useEffect(() => {
    setValue("birthDate", formatDate(onlyNumbers(watchBirthDate)));
  }, [watchBirthDate]);

  useEffect(() => {
    setValue("cpf", formatCpf(onlyNumbers(watchCpf)));
  }, [watchCpf]);

  useEffect(() => {
    setValue("phone", formatPhone(onlyNumbers(watchPhone)));
  }, [watchPhone]);

  const onCancel = () => {
    reset();
    closeModal();
  };

  const onSubmit = async (values) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        nickname: values.nickname,
        birthDate: parse(values.birthDate, "dd/MM/yyyy", new Date()),
        cpf: onlyNumbers(values.cpf),
        phone: onlyNumbers(values.phone),
        address: values.address,
        email: values.email,
        password: values.password,
      }),
    });

    console.log("response ->", response);
  };

  return (
    <Column pl="x3" pr="x3" pt="x4" pb="x4" gap="x2">
      <Row fullWidth gap="x2" alignItems="flex-start">
        <Input
          control={control}
          name="firstName"
          label="Nome"
          error={errors.firstName?.message}
        />

        <Input
          control={control}
          name="lastName"
          label="Sobrenome"
          error={errors.lastName?.message}
        />
      </Row>

      <Input
        control={control}
        name="nickname"
        label="Apelido"
        secondaryLabel="(opcional)"
      />

      <Input
        control={control}
        name="birthDate"
        label="Data de nascimento"
        placeholder="__/__/____"
        error={errors.birthDate?.message}
        maxLength={10}
      />

      <Row fullWidth gap="x2" alignItems="flex-start">
        <Input
          control={control}
          name="cpf"
          label="CPF"
          placeholder="___.___.___-__"
          error={errors.cpf?.message}
          maxLength={CPF_FORMATTED_LENGTH}
        />

        <Input
          control={control}
          name="phone"
          label="Telefone"
          placeholder="(__) _____-____"
          error={errors.phone?.message}
          maxLength={15}
        />
      </Row>

      <Input
        control={control}
        name="address"
        label="Endereço"
        secondaryLabel="(opcional)"
      />

      <Input
        control={control}
        name="email"
        type="email"
        label="E-mail"
        error={errors.email?.message}
      />

      <Input
        control={control}
        name="password"
        type="password"
        label="Senha"
        error={errors.password?.message}
      />

      <Input
        control={control}
        name="passwordConfirm"
        type="password"
        label="Confirmação de senha"
        error={errors.passwordConfirm?.message}
      />

      <Row fullWidth mt="x2">
        <Button variant="text" onClick={onCancel}>
          Cancelar
        </Button>

        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          minWidth="160px"
        >
          Cadastrar
        </Button>
      </Row>
    </Column>
  );
};

export default SignUpForm;
