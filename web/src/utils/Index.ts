export const formatCNPJ = (cnpj: string) => {
  return cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};

export const validCNPJ = (cnpj: string) => {
  return /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/.test(cnpj);
};
