import { FC, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import { Box, Text } from "../../../components";

const CompaniesView: FC = () => {
  const history = useHistory<Receita>();
  const [receita] = useState<Receita>(history.location.state);
  return (
    <Box className="companiesView-container">
      <Box>
        <InputGroup>
          <InputGroup.Text className="companiesView-label">
            Nome
          </InputGroup.Text>
          <FormControl
            disabled
            value={receita.nome}
            className="companiesView-input"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className="companiesView-label">
            Razão Social
          </InputGroup.Text>
          <FormControl
            disabled
            value={receita.nome}
            className="companiesView-input"
          />
        </InputGroup>
        <Box className="companiesView-address">
          <InputGroup>
            <InputGroup.Text className="companiesView-label">
              Logradouro
            </InputGroup.Text>
            <FormControl
              disabled
              value={`${receita.logradouro},Nº ${receita.numero}, ${receita.complemento},${receita.bairro}, ${receita.municipio} - ${receita.uf}`}
              className="companiesView-input"
            />
          </InputGroup>
        </Box>
        <Text className="companiesView-title">Atividade Primária</Text>
        {receita.atividade_principal.map((atividade: Atividade, index) => (
          <Text className="companiesView-text" key={index}>
            {atividade.code} - {atividade.text}
          </Text>
        ))}
      </Box>
      <button className="danger" onClick={() => history.push("/")}>
        Voltar
      </button>
    </Box>
  );
};

export default CompaniesView;
