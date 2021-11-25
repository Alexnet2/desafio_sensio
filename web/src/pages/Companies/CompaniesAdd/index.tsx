import { FC, useCallback, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import { Box, Text } from "../../../components";
import { api } from "../../../config";
import { formatCNPJ, validCNPJ } from "../../../utils/Index";

const CompaniesAdd: FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [cnpj, setCnpj] = useState("");

  const setMessageTime = useCallback((message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 1000 * 1);
  }, []);

  const add = async () => {
    if (validCNPJ(cnpj.replace(/[^\d]+/g, ""))) {
      try {
        await api.post("/companies", { cnpj: cnpj.replace(/[^\d]+/g, "") });
        history.push("/");
      } catch (err: any) {
        setMessageTime(err.response.data);
      }
    } else {
      setMessageTime("CNPJ inválido");
    }
  };
  return (
    <Box className="companiesAdd-container">
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="CNPJ"
            aria-label="cnpj"
            aria-describedby="basic-addon2"
            maxLength={18}
            onChange={(e) => {
              setCnpj(formatCNPJ(e.target.value));
            }}
            value={cnpj}
          />
          <InputGroup.Text id="basic-addon2">
            XX. XXX. XXX/0001-XX
          </InputGroup.Text>
        </InputGroup>
        {message !== "" && (
          <Text style={{ alignSelf: "center", color: "red" }}>{message}</Text>
        )}
      </Box>
      <Box className="groupButton">
        <button className="danger" onClick={() => history.push("/")}>
          Voltar
        </button>
        <button className="success" onClick={add}>
          Cadastrar
        </button>
      </Box>
    </Box>
  );
};

export default CompaniesAdd;
