import React, { useEffect, useState, useRef} from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { HttpStatusCode } from "axios";

function FormFruta(props) {
  const API_ADD_FRUTA = process.env.REACT_APP_API_ADD_FRUTA;  
  const descFruta = useRef("");
  const costoFruta = useRef("");
  const costoFlete = useRef("");
  const costoBolsa = useRef("");
  const costoEtiquetas = useRef("");
  const costoCaja = useRef("");
  const costoCinta = useRef("");
  const costoVarios = useRef("");

  useEffect(() => {
   
    console.log('en useEffect de FormFruta. props= ', props)
    console.log('cambió formularioData?', props.formularioData)
    console.log('props.selectedFruta= ', props.selectedFruta)
    console.log('props.formularioData.selectedFruta= ', props.formularioData.selectedFruta)
    descFruta.current.value = props.formularioData.descFruta
    costoFruta.current.value = props.formularioData.costoFruta
    costoFlete.current.value = props.formularioData.costoFlete
    costoBolsa.current.value = props.formularioData.costoBolsa
    costoEtiquetas.current.value = props.formularioData.costoEtiquetas
    costoCaja.current.value = props.formularioData.costoCaja
    costoCinta.current.value = props.formularioData.costoCinta
    costoVarios.current.value = props.formularioData.costoVarios

    //props.formularioData.selectedFruta = props.formularioData.selectedFruta
    
  }, [props.formularioData]);
    

  const URL = API_ADD_FRUTA;
  const [formData, setFormData] = useState({
    nombre: "",
    costo: "0",
    flete: "0",
    bolsa: "0",
    etiquetas: "0",
    caja: "0",
    cinta: "0",
    varios: "0",
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
    console.log('costoBolsa.current.value', costoBolsa.current.value);

    const frutaInfo = {
      id: props.formularioData.selectedFruta,
      nombre: props.formularioData.selectedFruta == null ? formData.nombre : descFruta.current.value,
      costo: props.formularioData.selectedFruta == null ? formData.costo : costoFruta.current.value,
      flete: props.formularioData.selectedFruta == null ? formData.flete : costoFlete.current.value,

      bolsa: props.formularioData.selectedFruta == null ? formData.bolsa : costoBolsa.current.value,
      etiquetas: props.formularioData.selectedFruta == null ? formData.etiquetas : costoEtiquetas.current.value,
      caja: props.formularioData.selectedFruta == null ? formData.caja : costoCaja.current.value,
      cinta: props.formularioData.selectedFruta == null ? formData.cinta : costoCinta.current.value,
      varios: props.formularioData.selectedFruta == null ? formData.varios : costoVarios.current.value,

      action: props.formularioData.selectedFruta == null ? "ADD" : "EDIT"
    };

    console.log('En realidad enviando frutaInfo= ', frutaInfo)
    console.log('frutaInfo.action= ', frutaInfo.action)
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

    costoBolsa.current.value = "";
    costoEtiquetas.current.value = "";
    costoCaja.current.value = "";
    costoCinta.current.value = "";
    costoVarios.current.value = "";

    props.formularioData.selectedFruta = null;
  };

  return (
    <div className="widget">
      <div className="panel panel-default">
        <div className="panel-heading" style={{backgroundColor: "#7280CF", fontWeight: "bold"}}>
          Informacion
        </div>
        <div className="panel-body">
          <form id="formulario" onSubmit={handleSubmit}>
            <div className="row mb-3" style={{paddingTop: "10px"}}>
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
            <div className="row mb-3">
              <label htmlFor="costoBolsa" className="col-sm-2 col-form-label">
                Bolsa
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoBolsa}
                  id="costoBolsa"
                  name="bolsa"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoBolsa}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="costoEtiquetas" className="col-sm-2 col-form-label">
                Etiquetas
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoEtiquetas}
                  id="costoEtiquetas"
                  name="etiquetas"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoEtiquetas}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="costoCaja" className="col-sm-2 col-form-label">
              Caja
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoCaja}
                  id="costoCaja"
                  name="caja"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoCaja}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="costoCinta" className="col-sm-2 col-form-label">
              Cinta
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoCinta}
                  id="costoCinta"
                  name="cinta"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoCinta}
                />
              </div>
            </div>                        

            <div className="row mb-3">
              <label htmlFor="costoVarios" className="col-sm-2 col-form-label">
              Varios
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  ref={costoVarios}
                  id="costoVarios"
                  name="varios"
                  onChange={onChangeHandler}
                  defaultValue={props.formularioData.costoVarios}
                />
              </div>
            </div>            

            <Button id="botonCancelar" onClick={() => clearFormFields()} className="btn btn-secondary" style={{float: "left"}}>
              Cancelar
            </Button>

            <Button id="boton" type="submit" className="btn btn-primary" style={{float: "right"}}>
              Guardar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormFruta;
