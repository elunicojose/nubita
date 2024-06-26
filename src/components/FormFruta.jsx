import React, { useEffect, useState, useRef} from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { HttpStatusCode } from "axios";

function FormFruta(props) {
  const API_ADD_FRUTA = process.env.REACT_APP_API_ADD_FRUTA;  
  const descFruta = useRef("");
  const costoFruta = useRef("");
  const costoFlete = useRef("");

  useEffect(() => {
   
    console.log('en useEffect de FormFruta. props= ', props)
    console.log('cambió formularioData?', props.formularioData)
    console.log('props.selectedFruta= ', props.selectedFruta)
    console.log('props.formularioData.selectedFruta= ', props.formularioData.selectedFruta)
    descFruta.current.value = props.formularioData.descFruta
    costoFruta.current.value = props.formularioData.costoFruta
    costoFlete.current.value = props.formularioData.costoFlete
    props.formularioData.selectedFruta = props.formularioData.selectedFruta
    
  }, [props.formularioData]);
    

  const URL = API_ADD_FRUTA;
  const [formData, setFormData] = useState({
    nombre: "",
    costo: "0",
    flete: "0",
  });

  const onChangeHandler = (event) => {
    console.log('FormFruta onChangeHandler...')
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando...", formData);
    console.log('costoFruta.current.value', costoFruta.current.value);

    const frutaInfo = {
      id: props.formularioData.selectedFruta,
      nombre: props.formularioData.selectedFruta == null ? formData.nombre : descFruta.current.value,
      costo: props.formularioData.selectedFruta == null ? formData.costo : costoFruta.current.value,
      flete: props.formularioData.selectedFruta == null ? formData.flete : costoFlete.current.value,
      action: props.formularioData.selectedFruta == null ? "ADD" : "EDIT",
    };

    console.log('frutaInfo= ' + frutaInfo.action)
    axios
      .post(URL, frutaInfo)
      .then((res) => {
        console.log("enviado: ", res.data);
        if (res.status === HttpStatusCode.Ok) {
          if (frutaInfo.action === 'ADD') {
           props.showAlert("Nueva fruta agregada", "success");
          }
          else if (frutaInfo.action === 'EDIT') {
           props.showAlert("Fruta modificada", "success");
          } 
          
          props.reloadData(); //llamando a reload de App
          console.log('Response status= ' + res.status)
          clearFormFields();
        }
        
      })
      .catch((err) => {
        console.log("Error al procesar fruta.", err);
      });
  };

  const clearFormFields = () => {
    console.log('Limpiando formulario...')
    descFruta.current.value = "";
    costoFruta.current.value = "";
    costoFlete.current.value = "";
    props.formularioData.selectedFruta = null;
  };

  return (
    <div className="widget">
      <div className="panel panel-default">
        <div
          className="panel-heading"
          style={{ backgroundColor: "#7280CF", fontWeight: "bold" }}
        >
          Informacion
        </div>
        <div className="panel-body">
          <form id="formulario" onSubmit={handleSubmit}>
            <div className="row mb-3" style={{ paddingTop: "10px" }}>
              <label htmlFor="descFruta" className="col-sm-2 col-form-label">
                Fruta
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  ref={descFruta}
                  id="descFruta"
                  name="nombre"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.descFruta}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="costoFruta" className="col-sm-2 col-form-label">
                Costo
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoFruta}
                  id="costoFruta"
                  name="costo"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoFruta}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="costoFlete" className="col-sm-2 col-form-label">
                Flete
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoFlete}
                  id="costoFlete"
                  name="flete"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoFlete}
                />
              </div>
            </div>

            <Button
              id="botonCancelar"
              onClick={() => clearFormFields()}
              className="btn btn-secondary"
              style={{ float: "left" }}
            >
              Cancelar
            </Button>

            <Button
              id="boton"
              type="submit"
              className="btn btn-primary"
              style={{ float: "right" }}
            >
              Guardar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormFruta;
