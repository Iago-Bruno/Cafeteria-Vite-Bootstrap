import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const CoffeeCard = ({ coffee }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={coffee.image} />
        <Card.Body>
          <Card.Title>{coffee.title}</Card.Title>
          <Card.Text>{coffee.label}</Card.Text>
          <Button variant="primary">Ir para algum lugar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CoffeeCard;
