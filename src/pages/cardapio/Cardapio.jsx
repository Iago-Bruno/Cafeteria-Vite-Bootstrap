import { useEffect, useState } from "react";
import { Container, Table, Form, Button, Image } from "react-bootstrap";
import CardapioFormModal from "./CardapioFormModal";

const Cardapio = () => {
  const [show, setShow] = useState(false);
  const [consulta, setConsulta] = useState("");
  const [cardapio, setCardapio] = useState([]);

  const handleModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    fetch("http://localhost:5000/cardapios", { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
          // return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setCardapio([...data]);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Container className="my-3">
        <Button variant="primary" onClick={handleModal}>
          +
        </Button>
        <CardapioFormModal
          show={show}
          handleModal={handleModal}
          cardapio={cardapio}
          setCardapio={setCardapio}
        ></CardapioFormModal>
      </Container>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Busca</Form.Label>
            <Form.Control
              name="consulta"
              defaultValue={consulta || ""}
              type="text"
              placeholder="Digite um valor para buscar"
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
              <th>Título</th>
              <th>Descrição</th>
              <th>Imagem</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {cardapio.map((cliente, i) => {
              return (
                <tr key={i}>
                  <td>{cliente.titulo}</td>
                  <td>{cliente.descricao}</td>
                  <td>
                    <Image
                      src={cliente.imagem}
                      rounded
                      style={{ width: "200px", height: "200px" }}
                    />
                  </td>
                  <td>{cliente.preco}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Cardapio;
