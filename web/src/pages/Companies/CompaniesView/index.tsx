import { FC, useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import { Box, LocationPin, Text } from "../../../components";
import GoogleMapReact from "google-map-react";
import { api_google_geo } from "../../../config";
const CompaniesView: FC = () => {
  const history = useHistory<Receita>();
  const [receita] = useState<Receita>(history.location.state);
  const [location, setLocation] = useState<{
    address: string;
    lat: number;
    lng: number;
  }>(
    {} as {
      address: string;
      lat: number;
      lng: number;
    }
  );

  useEffect(() => {
    api_google_geo
      .get("", {
        params: {
          address: `${receita.logradouro},Nº ${receita.numero}, ${receita.bairro}, ${receita.municipio}`,
          key: String(process.env.REACT_APP_GOOGLE_KEY),
        },
      })
      .then((resp) => {
        if (resp.data.results.length > 0) {
          setLocation({
            lat: resp.data.results[0].geometry.location.lat,
            lng: resp.data.results[0].geometry.location.lng,
            address: resp.data.results[0].formatted_address,
          });
        }
      })
  }, [receita]);
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
              value={
                location.address ||
                `${receita.logradouro},Nº ${receita.numero}, ${receita.complemento},${receita.bairro}, ${receita.municipio} - ${receita.uf}`
              }
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
      <Box className="googleMaps">
        {location.lat && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: String(process.env.REACT_APP_GOOGLE_KEY),
            }}
            defaultCenter={location}
            defaultZoom={11}
          >
            <LocationPin text={location.address} />
          </GoogleMapReact>
        )}
      </Box>
      <button className="danger" onClick={() => history.push("/")}>
        Voltar
      </button>
    </Box>
  );
};

export default CompaniesView;
