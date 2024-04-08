import { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/*import TablaFrutas from "./components/TablaFrutas";
import FormFruta from "./components/FormFruta";
import FormMix from "./components/FormMix";
import CardsMixes from "./components/CardsMixes";*/
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frutas from './pages/frutas'
import Mixes from './pages/mixes'
//import PropTypes from 'prop-types';

function App() {

  /*
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
*/
 const handleEdit = (data) => {
 }

 const editFruta = () => {
 }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/frutas" exact element={<Frutas/>} />
          <Route path="/mixes" element={<Mixes/>} />
        </Routes>
      </Router>
    </>

    /*
    {
    <div className="App">
    <Sidebar/>
      
      
      <section className="bg-grey-50 padding-top-60 padding-top-sm-30">

        <div className="container">
        
          <div className="row myPanel chula">
            <div className="col-md-6 col-sm-4 hidden-xs">
              <TablaFrutas frutas={frutas}  editarFruta = {(data) => {handleEdit(data)}} />
            </div>
            <div
              className="col-md-6 col-sm-4 hidden-xs"
              style={{ paddingBottom: "10px" }}
            >
              <FormFruta reloadData= {() => reloadFrutas()} showAlert= {(msg, clazz) => showAlert(msg, clazz)} editarFruta = {editFruta}/>
            </div>
          </div>
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
      
      </div>
  }*/
  );
}

/*App.propTypes = {
  onReloadTablaFrutasHandler: PropTypes.func.isRequired
}*/

export default App;

/*

  <div>
   {!data ? "Loading..." :
   data.map((fruta) => (
    <div key={fruta.id}>
      {fruta.id} {fruta.nombre}
    </div>

   ))
   }
  </div>


 <div classNameName='App'>
      { !data ? <div>Loading..</div> 
           : data.map((fruta, index) => {
           return (<div>{fruta.nombre}</div>)  
        })
      }
    </div>
*/
