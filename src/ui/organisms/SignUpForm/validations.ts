import { isValid, parse } from "date-fns";
import * as yup from "yup";

import { validateCpf } from "utils/document";
import { validateEmail } from "utils/email";

const requiredText = "Campo obrigatório";

const signUpValidation = yup.object().shape({
  firstName: yup.string().required(requiredText),
  lastName: yup.string().required(requiredText),
  birthDate: yup
    .string()
    .required(requiredText)
    .test("", "Data inválida", (value) =>
      isValid(parse(value, "dd/MM/yyyy", new Date()))
    ),
  cpf: yup
    .string()
    .required(requiredText)
    .test("", "CPF inválido", (value) => validateCpf(value)),
  phone: yup.string().required(requiredText),
  email: yup
    .string()
    .required(requiredText)
    .test("", "E-mail inválido", (value) => validateEmail(value)),
  password: yup.string().required(requiredText).min(8, "Senha muito curta"),
  passwordConfirm: yup
    .string()
    .required(requiredText)
    .oneOf([yup.ref("password"), ""], "As senhas não são iguais"),
});

export default signUpValidation;
