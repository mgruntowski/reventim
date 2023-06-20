export const CPF_LENGTH = 11;
export const CPF_FORMATTED_LENGTH = 14;

const calculateFirstDigit = (value: string) => {
  let totalSum = 0;
  const array = value.split("");

  for (let i = 0; i < 9; i += 1) {
    totalSum += (10 - i) * parseInt(array[i], 10);
  }

  const digit = 11 - (totalSum % 11);
  return digit >= 10 ? 0 : digit;
};

const calculateSecondDigit = (value: string, firstDigit: number) => {
  let totalSum = 0;
  const array = value.split("");

  for (let i = 0; i < 9; i += 1) {
    totalSum += (11 - i) * parseInt(array[i], 10);
  }
  totalSum += firstDigit * 2;

  const digit = 11 - (totalSum % 11);
  return digit >= 10 ? 0 : digit;
};

const equalCharacters = (value: string) =>
  value.split("").every((char) => char === value[0]);

const sanitize = (value: string) =>
  value?.replace(/[a-zA-Z,./ \-+]/g, "") || "";

export const validateCpf = (value: string) => {
  const sanitizedValue = sanitize(value);

  const realFirstDigit = Math.floor((Number(sanitizedValue) % 100) / 10);
  const realSecondDigit = Number(sanitizedValue) % 10;

  const firstDigit = calculateFirstDigit(sanitizedValue);
  const secondDigit = calculateSecondDigit(sanitizedValue, firstDigit);

  return (
    !equalCharacters(sanitizedValue) &&
    firstDigit === realFirstDigit &&
    secondDigit === realSecondDigit
  );
};

export const formatCpf = (cpf: string) =>
  cpf ? `${cpf}`.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : "";
