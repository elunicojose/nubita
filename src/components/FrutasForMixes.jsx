import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const FrutasForMixes = ({ frutas, onCheckboxChange, onInputChange }) => {
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    onCheckboxChange(id, checked);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    onInputChange(id, value);
  };

  function showAlert() {
    alert('limpiando campos...');
}

  return (
    <Container className="mt-4">
      <Form>
        <Row>
          {frutas &&
            frutas.length &&
            frutas.map((fruta) => (
              <Col xs={12} md={6} lg={4} key={fruta.idfrutas} className="mb-3">
                <Form.Check
                  id={fruta.idfrutas}
                  type="checkbox"
                  label={fruta.nombre}
                  className="mb-2"
                  onChange={handleCheckboxChange} 
                />
                <Form.Control
                  type="number"
                  defaultValue="0"
                  id={fruta.idfrutas}
                  onChange={handleInputChange} 
                />
              </Col>
            ))}
        </Row>
      </Form>
    </Container>
  );
};

export default FrutasForMixes;
