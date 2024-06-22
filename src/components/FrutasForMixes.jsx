import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const FrutasForMixes = ({frutas}) => {
  return (
    <Container className="mt-4">
      <Form>
        <Row>
          {frutas && frutas.length && frutas.map((fruta) => (
            <Col xs={12} md={6} lg={4} key={fruta.idfrutas} className="mb-3">
              <Form.Check 
                id={"flexCheckDefault-" + fruta.idfrutas}
                type="checkbox"
                label={fruta.nombre}
                className="mb-2"
              />
              <Form.Control type="number" defaultValue = "0" id={"cantGramos-" + fruta.idfrutas} />
            </Col>
          ))}
        </Row>
      </Form>
    </Container>
  );
};

export default FrutasForMixes;
