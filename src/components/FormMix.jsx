import React from "react";
//import FrutasForMixes from "./FrutasForMixes";
import { useEffect} from "react";
import FrutasForMixes from "./FrutasForMixes";

function MyMixes({frutas}) {

  useEffect(() => {
    console.log("en FormMix frutas= " + frutas);
    
  }, []);

    const crearOActualizarMix = () => {}
    const resetMix = () => {}

  return (
      <div className="card" style={{ width: "100%"}}>
        <div className="card-body">
          <h5 className="card-title">Gestor Mixes</h5>
          <div className="d-flex flex-row">
            <div className="d-flex flex-row">
              <label htmlFor="nombreMix" className="col-sm-5 col-form-label">
                Nombre Mix
              </label>
              <div className="col-sm-12">
                <input type="text" className="form-control" id="nombreMix" />
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex flex-row">
            <label
              className="col-sm-12 col-form-label"
              style={{ fontWeight: "bold", paddingBottom: "0px" }}
            >
              Fruta / Gramos
            </label>
          </div>
          <br />

          <FrutasForMixes frutas={frutas}/>

          <div className="d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn btn-secondary"
              style={{width: "96px"}}
              onClick ={resetMix()}
            >
              Cancelar
            </button>
            <button
              id="btnCrear"
              type="button"
              className="btn btn-success"
              style={{width: "96px"}}
              onClick={crearOActualizarMix()}
            >
              Crear
            </button>
          </div>
        </div>
      </div>


  );
}

export default MyMixes;
