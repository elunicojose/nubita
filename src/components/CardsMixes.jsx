import React from "react";

function CardsMixes({mixes}) {

  console.log('MIXES= ', mixes)
  const prepararMixParaEdicion = (event, param) => {}
  const calcularGanancia = (event, param) => {}
  const removeMix = (event, param) => {}

  return (
    <>
      {mixes && mixes.length && 
        mixes.map((mix) => (
            <div className="col-md-3 p-2" key={mix.idMix} >
            <div className="card carView">
              <div className="card-header" style={{backgroundColor: "#f5f5f5"}}>
                 <span><h6 className="card-title">{mix.nombreMix}</h6></span><span style={{float: "right"}}><i onClick={event => prepararMixParaEdicion(event, mix.idmix)} 
                 className="bi bi-pencil" style={{paddingRight: "10px"}}></i><i onClick={event => removeMix(event, mix.idmix)} className="bi bi-trash"></i></span>
              </div>
              <div className="card-body">
                {
                    mix.frutasMix &&
                    mix.frutasMix.map((frutaMix) => (
               <div key={frutaMix.id}>
                <span style={{paddingRight: "10px"}}>{frutaMix.nombre}</span>
                <span>{frutaMix.gramos} gr</span>
                <span style={{float: "right"}}>${frutaMix.costo}</span>
               </div>
                    ))
                }

               </div>
           <div className="card-footer" style={{textAlign: "right",  fontWeight: "bold"}}>${mix.totalMix}</div>
           <div className="card-footer">
             <div className="input-group mb-4" style={{columnGap: "5px"}}>
              <label htmlFor="exampleFormControlInput1" className="form-label" style={{paddingTop: "5px", paddingRight: "5px"}}>Gcia % </label>
              <input id={"inputPct-" + mix.idMix} defaultValue={mix.pct ? mix.pct : 0} type="number" className="form-control" style={{textAlign: "end", borderRadius: "var(--bs-border-radius)"}}/>
              <i onClick={event => calcularGanancia(event, mix.idMix, mix.totalMix)} className="bi bi-calculator" style={{paddingTop: "5px"}}></i>
              <label id={"lblTotalConPct-" + mix.idMix} style={{paddingLeft: "10px", paddingTop: "5px",  fontWeight: "bold"}} className="form-label">$ {
      mix.totalConGanancia ? mix.totalConGanancia : mix.totalMix}</label>
             </div>
           </div>
        </div> 
      </div>
        ))
        }
    </>
  );
}

export default CardsMixes;
