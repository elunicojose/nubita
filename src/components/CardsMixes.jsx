import React, { useState } from "react";
import axios, { HttpStatusCode } from "axios";
import { showAlertMixes } from "../utils/Commons";

const CardsMixes =( props) => {
  console.log("props.MIXES= ", props.mixes);
  
  const API_DELETE_MIX = process.env.REACT_APP_API_DELETE_MIX
  const API_UPDATE_GANANCIA_MIX = process.env.REACT_APP_API_UPDATE_GANANCIA_MIX

  const [ganancias, setGanancias] = useState({});

  const prepararMixParaEdicion = (event, param) => {};

  const calcularGanancia = async (idMix) => {
   console.log('idMix= ', idMix)
   console.log('ganancia= ', ganancias[idMix])
   if (ganancias[idMix]) { //solo actualizar total con ganancia solo si se moficó el valor del %
    const body = {
      id: idMix,
      pct: ganancias[idMix]
    };

console.log(API_UPDATE_GANANCIA_MIX)
console.log(process.env.REACT_APP_API_UPDATE_GANANCIA_MIX)

    try {
      const response = await axios.post(API_UPDATE_GANANCIA_MIX, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Respuesta del servidor:', response.data);
      if (response.status == HttpStatusCode.Ok) {
        props.reloadMixesList()
      }

    } catch (error) {
      console.error('Error:', error);
    }  
   }
  };

  const handleChangeGanancia = (idMix, e) => {
    setGanancias({
      ...ganancias,
      [idMix]: e.target.value
    });
  };
  
  const removeMix = (idMix) => {
    console.log('borrando mix= ', idMix);
    axios
      .delete(API_DELETE_MIX + `/${idMix}`)
      .then((res) => {
        console.log('resultado borrado= ', res)
        if (res.status === HttpStatusCode.Ok) {
          console.log('status code=> ', res.status)
          showAlertMixes("Mix borrado", "success");   
          props.reloadMixesList()
        }
        
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {props.mixes &&
        props.mixes.length &&
        props.mixes.map((mix) => (
          <div className="col-md-3 p-2" key={mix.idMix}>
            <div className="card carView">
              <div
                className="card-header"
                style={{ backgroundColor: "#f5f5f5" }}>
                <span>
                  <h6 className="card-title">{mix.nombreMix}</h6>
                </span>
                <span style={{ float: "left" }}>
                  <i
                    onClick={(event) =>
                      prepararMixParaEdicion(event, mix.idMix)
                    }
                    className="bi bi-pencil"
                    style={{ paddingRight: "10px" }}
                  ></i>
                </span>                   
                <span style={{ float: "right" }}>
                  <i
                    onClick={() => removeMix(mix.idMix)}
                    className="bi bi-trash"
                  ></i>
                </span>
              </div>
              <div className="card-body">
                {mix.frutasMix &&
                  mix.frutasMix.map((frutaMix) => (
                    <div key={frutaMix.idFruta}>
                      <span style={{ paddingRight: "10px" }}>
                        {frutaMix.nombreFruta}
                      </span>
                      <span>{frutaMix.gramos} gr</span>
                      <span style={{ float: "right" }}>${frutaMix.costo}</span>
                    </div>
                  ))}
              </div>
              <div
                className="card-footer"
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                ${mix.totalMix}
              </div>
              <div className="card-footer">
                <div key = {mix.idMix} className="input-group mb-4" style={{ columnGap: "5px" }}>
                  <label
                    htmlFor={"inputPct-" + mix.idMix}
                    className="form-label"
                    style={{ paddingTop: "5px", paddingRight: "5px" }}
                  >
                    Gcia %{" "}
                  </label>
                  <input
                    id={"inputPct-" + mix.idMix}
                    defaultValue={mix.pct ? mix.pct : 0}
                    type="number"
                    onChange={(e) => handleChangeGanancia(mix.idMix, e)} 
                    className="form-control"
                    style={{
                      textAlign: "end",
                      borderRadius: "var(--bs-border-radius)",
                    }}
                  />
                  <i
                    onClick={() =>
                      calcularGanancia(mix.idMix)
                    }
                    className="bi bi-calculator"
                    style={{ paddingTop: "5px" }}
                  ></i>
                  <label
                    id={"lblTotalConPct-" + mix.idMix}
                    style={{
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      fontWeight: "bold",
                    }}
                    className="form-label"
                  >
                    ${" "}
                    {mix.totalConGanancia ? mix.totalConGanancia : mix.totalMix}
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default CardsMixes;
