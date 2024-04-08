import React from "react";

function MyMixes({frutas}) {

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
          <div id="gestorMixes" className="d-flex flex-row">
            { frutas && frutas.length && frutas.map((fruta) => (
               <div className="form-check" key={fruta.id}>
               <input className="form-check-input" type="checkbox" id={"flexCheckDefault-" + fruta.id} style={{marginLeft: "0"}}/>
               <label className="form-check-label" style={{paddingLeft: "5px"}} htmlFor={"flexCheckDefault-" + fruta.id}>{fruta.nombre}</label>
               <div className="row mb-3">
                 <div className="col-sm-10">
                 <input type="number" defaultValue = "0" className="form-control" id={"cantGramos-" + fruta.id} style={{textAlign: "right", marginTop: "10px"}}/>
                 </div>
               </div>
             </div>
            ))}

          </div>

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
