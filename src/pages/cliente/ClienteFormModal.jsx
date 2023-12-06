import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const ClienteFormModal = ({ show, handleModal, clientes, setClientes }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let cliente = { ...inputs };
    fetch("http://localhost:5000/clientes", {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Cadastrou");
          setClientes([...clientes, cliente]);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Usuário</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="nome"
                value={inputs.nome || ""}
                type="text"
                placeholder="Digite o nome"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control
                name="sobrenome"
                value={inputs.sobrenome || ""}
                type="text"
                placeholder="Digite o sobrenome"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                name="email"
                value={inputs.email || ""}
                type="text"
                placeholder="Digite o e-mail"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                name="celular"
                value={inputs.celular || ""}
                type="text"
                placeholder="Digite o número do celular"
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
              Fechar
            </Button>
            <Button type="submit" variant="primary" onClick={handleModal}>
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ClienteFormModal;
