import { Modal } from 'react-bootstrap';

const ModalComponent = ({showModal, handleChangeModal, handleChangeInput}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Confirmou");
  };

  return (
    <Modal
      show={show}
      onHide={handleChangeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Adicionar alimento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formFilter">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChangeInput}
              placeholder="Digite um alimento"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFilter">
            <Form.Label>SobreNome</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              onChange={handleChangeInput}
              placeholder="Digite um alimento"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleChangeModal}>
          Fechar
        </Button>
        <Button variant="primary" type="sumit" onClick={handleChangeModal}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
