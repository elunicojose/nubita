import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { showAlert } from "../utils/Commons";
/*
interface ChildProps {
  reloadData: Function,
  frutas: Array<{id: string, nombre: string, costo: string, flete: string, total: string}>
}*/

//const  TablaFrutas = (props : ChildProps) => {
const  TablaFrutas = (props) => {  

  console.log('TablaFrutas props: ', props)
  /*
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/mixes")
      result.json().then((json) => {
        setFrutas(json)
      }) 
    };
    console.log('fetching data...')
    fetchData();
    console.log('tam= ', frutas.length)
    buildTable();
  }, []);

  getApiData();
  buildTable();
}, []);
*/

  /* const buildTable = () => {
    console.log('nuevo building table..')
    console.log('frutas', frutas)
    if (frutas) {
      let placeHolder = document.getElementById("data-output");
      let out = "";
      for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i];
        
        out += `
           <tr>
            <td>${fruta.id}</td>
            <td>${fruta.nombre}</td>
            <td>${fruta.costo}</td>
            <td>${fruta.flete}</td>
            <td>${fruta.total}</td>
            <td> 
              <{$Button} className="btn btn-warning" onClick="editFruta(${fruta.id});"><i className="bi bi-pencil"></i></Button>
              <Button className="btn btn-danger" onClick="removeFruta(${fruta.id});"><i className="bi bi-trash"></i></Button>
            </td>
           </tr>
         `;
      }
      placeHolder.innerHTML = out;
      // buildGestorMixes();
    } else {
      console.log('no hay frutas')
    }
  };

  buildTable() */

  /*
  const editFruta = (event, param) => {
    //console.log(event);
    console.log('TablaFrutas editFruta editando...', param);
    //props.setFormularioData(param)
  };*/

  const removeFruta = (param) => {
    console.log(param);
    axios
      .delete("/borrarFruta", {data: {id: param}})
      .then((res) => {
        
        console.log('resultado borrado= ', res.data)
        props.reloadData()
       /* if (res.data.status == 'ok') {
             let frutasActualizado = frutas.filer((elem) => elem.id !== d)
        }*/
        
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="widget">
      <div className="panel panel-default">
        <div
          className="panel-heading"
          style={{ backgroundColor: "#7280CF", fontWeight: "bold" }}
        >
          Frutas
        </div>
        <div className="panel-body">
          <table
            id="tblFrutas"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fruta</th>
                <th scope="col">Costo</th>
                <th scope="col">Flete</th>
                <th scope="col">Total</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody id="data-output">
              {
              props && props.frutas && props.frutas.length &&
                props.frutas.map((fruta) => (
                  <tr key={fruta.id}>
                    <td>{fruta.id}</td>
                    <td>{fruta.nombre}</td>
                    <td>{fruta.costo}</td>
                    <td>{fruta.flete}</td>
                    <td>{fruta.total}</td>
                    <td>
                      <Button
                        className="btn btn-warning"
                        onClick={(event) => props.editFruta(event, {id: fruta.id, descFruta : fruta.nombre, costoFruta : fruta.costo, costoFlete : fruta.flete, selectedFruta: fruta.id })}
                      >
                        <i className="bi bi-pencil"></i>
                      </Button>

                      <Button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                        onClick={() => removeFruta(fruta.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TablaFrutas;
