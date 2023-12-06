import { useEffect, useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import ClienteFormModal from "./ClienteFormModal";

const Cliente = () => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [clientes, setClientes] = useState([]);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    fetch("http://localhost:5000/clientes", { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
          // return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setClientes([...data]);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Button variant="primary" className="mb-2" onClick={handleModal}>
          +
        </Button>
        <ClienteFormModal
          show={show}
          handleModal={handleModal}
          clientes={clientes}
          setClientes={setClientes}
        ></ClienteFormModal>
      </Container>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Busca</Form.Label>
            <Form.Control
              name="consulta"
              value={inputs.consulta || ""}
              type="text"
              placeholder="Digite um valor para buscar"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="button">
            Buscar
          </Button>
        </Form>
      </Container>
      <Container className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, i) => {
              return (
                <tr key={i}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.sobrenome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.celular}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Cliente;
