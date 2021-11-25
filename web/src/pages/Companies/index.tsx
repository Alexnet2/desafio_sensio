import { FC, useCallback, useEffect, useState } from "react";
import { FormControl, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { Box, Text } from "../../components";
import { api } from "../../config";
import { formatCNPJ, validCNPJ } from "../../utils/Index";
import { InputGroup } from "react-bootstrap";

const Companies: FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cnpj, setCnpj] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  useEffect(() => {
    api.get("/companies").then((resp) => {
      console.log(resp.data);
      setCompanies(resp.data);
    });
  }, []);

  const setMessageTime = useCallback((message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 1000 * 1);
  }, []);
  const search = async () => {
    try {
      if (!validCNPJ(cnpj.replace(/[^\d]+/g, ""))) {
        setMessageTime("CNPJ inválido");
        return;
      }

      const resp = await api.get(
        `/companies/details/${cnpj.replace(/[^\d]+/g, "")}`
      );
      await api.post("/companies", { cnpj: cnpj.replace(/[^\d]+/g, "") }).catch(err=>{});
      history.push({
        pathname: "/view",
        state: resp.data,
      });
    } catch (err: any) {
      setMessageTime(err.response.data);
    }
  };
  return (
    <Box className="companies-container">
      {message !== "" && <Text>{message}</Text>}
      <Box className="search-button">
        <InputGroup className="search">
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
          <button onClick={search}>Pesquisar</button>
        </InputGroup>
        <Box className="addButton">
          <button
            onClick={() => {
              history.push("/add");
            }}
          >
            Novo
          </button>
        </Box>
      </Box>
      <Table
        style={{ textAlign: "center" }}
        striped
        bordered
        hover
        size="sm"
        variant="dark"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.id}</td>
              <td>{formatCNPJ(company.cnpj)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default Companies;
