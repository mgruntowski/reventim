export const formatPhone = (value: string) =>
  value.replace(/(\w{2})(\w{5})(\w{4})/, "($1) $2-$3");
