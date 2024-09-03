import React from "react";
import { useEffect, useState, useRef  } from "react";
import FrutasForMixes from "./FrutasForMixes";
import { showAlertMixes } from "../utils/Commons";

const MyMixes = (props) => {

  const formRef = useRef(null); 
  const API_ADD_MIX = process.env.REACT_APP_API_ADD_MIX;
  useEffect(() => {
    console.log("en FormMix frutas= " + props.frutas);
  }, []);

  const [nombreMix, setNombreMix] = useState("");
  const [formData, setFormData] = useState({
    checkboxes: {},
    inputs: {}
  });
  const [mixInfo, setMixInfo] = useState({
    mixName:'',
    frutasInfo:[]
   })

  const handleNombreMixChange = (event) => {
    setNombreMix(event.target.value);
  };

  const handleCheckboxChange = (id, checked) => {
    setFormData(prevState => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [id]: checked,
        }
    }));
  };

  const handleInputChange = (id, value) => {
    setFormData(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [id]: value
      }
    }));
  };


  const cleanMixFrutas = () => {
    console.log('cleaning form data...')
    setNombreMix('');
    const inputs = formRef.current.querySelectorAll('input[type="number"]');
    const checkboxes = formRef.current.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(input => input.value = '0');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  }

  const handleSubmit = async () => {
    //e.preventDefault();
    try {
      const response = await fetch(API_ADD_MIX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mixInfo),
      });

      if (response.ok) {
        console.log('Mix de frutas agregado exitosamente');
        props.reloadMixesList();
        cleanMixFrutas()
      } else {
        console.error('Error al agregar el mix de frutas');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const crearOActualizarMix = () => {
    if (nombreMix.trim() === '') {
      showAlertMixes('El nombre del Mix es inválido', 'error')
      return;
    }

    const resultArray = [];
    Object.entries(formData.checkboxes).forEach(([id, checked]) => {
      const intValue = parseInt(formData.inputs[id], 10);
      console.log('intValue= ', intValue)
      if (checked && intValue && intValue !== 0) {
        resultArray.push({
          idFruta: id,
          gramos: formData.inputs[id]
        });
      }
    });
   
    if (resultArray && resultArray.length > 0) {
      mixInfo.mixName = nombreMix
      mixInfo.frutasInfo = resultArray
    }
    handleSubmit();
  };

  return (
    <form ref={formRef}>
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">Gestor Mixes</h5>
        <div className="d-flex flex-row">
          <div className="d-flex flex-row">
            <label htmlFor="nombreMix" className="col-sm-5 col-form-label">
              Nombre Mix
            </label>
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="nombreMix"
                onChange={handleNombreMixChange}
                value={nombreMix}
              />
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

        <FrutasForMixes
          frutas={props.frutas}
          onCheckboxChange={handleCheckboxChange}
          onInputChange={handleInputChange}
        />

        <div className="d-flex justify-content-end gap-3">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "96px" }}
            onClick={cleanMixFrutas}
          >
            Cancelar
          </button>
          <button
            id="btnCrear"
            type="button"
            className="btn btn-success"
            style={{ width: "96px" }}
            onClick={crearOActualizarMix}
          >
            Crear
          </button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default MyMixes;
