import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { HttpStatusCode } from "axios";
import '../css/tablafrutas.css'
import { showAlert } from "../utils/Commons";
import Table from 'react-bootstrap/Table';

const  TablaFrutas = (props) => {  
  console.log('TablaFrutas props: ', props)
  const API_DELETE_FRUTA = process.env.REACT_APP_API_DELETE_FRUTA
  const removeFruta = (idFruta) => {
    console.log(idFruta);
    axios
      .delete(API_DELETE_FRUTA+ `/${idFruta}`)
      .then((res) => {
        console.log('resultado borrado= ', res)
        if (res.status === HttpStatusCode.Ok) {
          showAlert("Fruta borrada", "success");   
        }
        props.reloadData()
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="widget">
      <div className="panel panel-default">
        <div className="panel-body">
          <Table id="tblFrutas" striped hover size="sm">
            <thead>
              <tr>
                <th scope="col">Fruta</th>
                <th scope="col">Costo</th>
                <th scope="col">Gastos</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody id="data-output">
              {props && props.frutas && props.frutas.length &&
                props.frutas.map((fruta) => (
                  <tr key={fruta.idfrutas}>
                    <td className='priority-0'>{fruta.idfrutas}</td>
                    <td>{fruta.nombre}</td>
                    <td>{fruta.costo}</td>
                    <td>{Number(fruta.flete) + Number(fruta.bolsa) + Number(fruta.etiquetas) + Number(fruta.caja) + Number(fruta.cinta) + Number(fruta.varios)}</td>
                    <td>{fruta.total}</td>
                    <td>
                      <Button size="sm"
                        className="btn btn-warning"
                        onClick={(event) => props.editFruta(event, {id: fruta.idfrutas, descFruta: fruta.nombre, 
                          costoFruta: fruta.costo, costoFlete: fruta.flete, 
                          costoBolsa: fruta.bolsa, costoEtiquetas: fruta.etiquetas, costoCaja: fruta.caja, costoCinta: fruta.cinta, costoVarios: fruta.varios, 
                          selectedFruta: fruta.idfrutas})}
                      >
                        <i className="bi bi-pencil"></i>
                      </Button>

                      <Button size="sm" style={{marginLeft: "5px"}} className="btn btn-danger" onClick={() => removeFruta(fruta.idfrutas)}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default TablaFrutas;
