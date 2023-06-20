export const formatDate = (value: string) =>
  value.replace(/(\w{2})(\w{2})(\w{4})/, "$1/$2/$3");
