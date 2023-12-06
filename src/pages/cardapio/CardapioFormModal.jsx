import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const CardapioFormModal = ({ show, handleModal, cardapio, setCardapio }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newCardapio = { ...inputs };
    fetch("http://localhost:5000/cardapios", {
      method: "POST",
      body: JSON.stringify(newCardapio),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setCardapio([...cardapio, newCardapio]);
        }
      })
      .catch((error) => {});

    handleModal();
  };

  return (
    <>
      <Modal show={show} onHide={handleModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                name="titulo"
                value={inputs.titulo || ""}
                type="text"
                placeholder="Digite o nome do item"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                name="descricao"
                value={inputs.descricao || ""}
                type="text"
                placeholder="Digite uma descrição para o item"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                name="imagem"
                value={inputs.imagem || ""}
                type="text"
                placeholder="Dê o link de uma imagem para representar o item"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                name="preco"
                value={inputs.preco || ""}
                type="text"
                placeholder="Digite o preço do item"
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CardapioFormModal;
