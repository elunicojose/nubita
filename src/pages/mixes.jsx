import React from "react";
import { useEffect, useState } from "react";
import FormMix from "../components/FormMix";
import CardsMixes from "../components/CardsMixes";

function Mixes() {

  const [frutas, setFrutas] = useState([]);
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    reloadFrutas();

    fetch("/mixes")
      .then((res) => res.json())
      .then((data) => setMixes(data));
  }, []);

  const reloadFrutas= () => {
    console.log('relaoding frutas....')
    fetch("/frutas")
      .then((res) => res.json())
      .then((data) => setFrutas(data));
  }
 
  return (
    <section className="bg-grey-50 padding-top-60 padding-top-sm-30">
      <div className="container">
      
        <div className="row myPanel p-2">
          <FormMix frutas={frutas} />
        </div>
        <div className="row myPanel p-2">
          <h5 className="card-title">Mixes</h5>
          <div id="containerMix" className="row">
            <CardsMixes mixes={mixes} />
          </div>
        </div>
          
      </div>
    </section>
  );
}

export default Mixes;
