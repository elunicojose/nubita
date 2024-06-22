import React from "react";
import { useEffect, useState } from "react";
import FormMix from "../components/FormMix";
import CardsMixes from "../components/CardsMixes";

function Mixes() {
  const API_FRUTAS = process.env.REACT_APP_API_GET_FRUTAS;
  const API_MIXES = process.env.REACT_APP_API_MIXES;

  const [frutas, setFrutas] = useState([]);
  const [mixes, setMixes] = useState([]);

  useEffect(() => {
    //reloadFrutas();
    console.log("relaoding frutas....");
    fetch(API_FRUTAS)
      .then((res) => res.json())
      .then((data) => setFrutas(data));

    console.log("relaoding mixes....");
    fetch(API_MIXES)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Expected JSON response from server, but received ' + contentType);
      }
      return response.json();
    })
    .then(data => {
      setMixes(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
      /*.then((res) => res.json())
      .then((data) => setMixes(data));*/
  }, []);

  /*const reloadFrutas= () => {
    console.log('relaoding frutas....')
    fetch(API_FRUTAS)
      .then((res) => res.json())
      .then((data) => setFrutas(data));
  }*/

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
