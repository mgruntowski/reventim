import * as yup from "yup";

import { validateEmail } from "utils/email";

const requiredText = "Campo obrigatório";

const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required(requiredText)
    .test("", "E-mail inválido", (value) => validateEmail(value)),
  password: yup.string().required(requiredText),
});

export default loginValidation;
