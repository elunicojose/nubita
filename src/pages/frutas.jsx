import React from "react";
import { useEffect, useState } from "react";
import TablaFrutas from "../components/TablaFrutas"
import FormFruta from "../components/FormFruta";
import { showAlert } from "../utils/Commons";

function Frutas() {
  const API_GET_FRUTAS = process.env.REACT_APP_API_GET_FRUTAS;  
  const [frutas, setFrutas] = useState([]);

  const [formularioData, setFormularioData] = useState({id: "", descFruta : "", costoFruta : "", costoFlete : "", selectedFruta: null }) 

  useEffect(() => {
    reloadFrutas();
  }, []);

  const reloadFrutas= () => {
    console.log('relaoding frutas....')
    fetch(API_GET_FRUTAS)
      .then((res) => res.json())
      .then((data) => setFrutas(data));
  }

   const editFruta = (event, data) => { 
    console.log('editando desde Frutas; func = editFruta', data)
    setFormularioData(data);
  }

  return (
    <section className="bg-grey-50 padding-top-60 padding-top-sm-30 mt-2">
      <div className="container">
        <div className="row myPanel chula">
          <div className="col-md-6 col-sm-4 hidden-xs">
            <TablaFrutas
              frutas={frutas}
              reloadData={() => reloadFrutas()}
              editFruta={editFruta}
            />
          </div>
          <div
            className="col-md-6 col-sm-4 hidden-xs"
            style={{paddingBottom:"10px"}}
          >
            <FormFruta
              reloadData={() => reloadFrutas()}
              showAlert={(msg, clazz) => showAlert(msg, clazz)}
              editFruta={editFruta}
              formularioData = {formularioData}
              setFormularioData = {setFormularioData}
              selectedFruta = {formularioData != null ? formularioData.id : null}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frutas;
