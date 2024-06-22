import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const FormularioResponsive = () => {
  // Supongamos que tienes un array de datos para los campos
  const campos = [
    { id: 1, nombre: 'Campo 1' },
    { id: 2, nombre: 'Campo 2' },
    { id: 3, nombre: 'Campo 3' },
    { id: 4, nombre: 'Campo 4' },
    { id: 5, nombre: 'Campo 5' },
    { id: 6, nombre: 'Campo 6' },
    { id: 7, nombre: 'Campo 7' },
    { id: 8, nombre: 'Campo 8' },
    // Añade más campos según necesites
  ];

  return (
    <Container className="mt-4">
      <Form>
        <Row>
          {campos.map((campo) => (
            <Col xs={12} md={6} lg={4} key={campo.id} className="mb-3">
              <Form.Check 
                type="checkbox"
                label={`Checkbox ${campo.id}`}
                className="mb-2"
              />
              <Form.Control type="text" placeholder={`Input ${campo.id}`} />
            </Col>
          ))}
        </Row>
      </Form>
    </Container>
  );
};

export default FormularioResponsive;
