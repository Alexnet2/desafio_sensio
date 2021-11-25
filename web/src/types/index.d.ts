interface Company {
  id: string;
  cnpj: string;
}

interface Receita {
  atividade_principal: Atividade[];
  data_situacao: string;
  complemento: string;
  tipo: string;
  nome: string;
  uf: string;
  telefone: string;
  email: string;
  atividades_secundarias: Atividade[];
  qsa: {
    qual: string;
    nome: string;
  }[];
  situacao: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  municipio: string;
  porte: string;
  abertura: string;
  natureza_juridica: string;
  fantasia: string;
  cnpj: string;
  ultima_atualizacao: string;
  status: string;
  efr: string;
  motivo_situacao: string;
  situacao_especial: string;
  data_situacao_especial: string;
  capital_social: string;
  extra: {};
  billing: { free: boolean; database: boolean };
}

interface Atividade {
  text: string;
  code: string;
}
