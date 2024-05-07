import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Frutas from './pages/frutas'
import Mixes from './pages/mixes'
import Home from './pages/home'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/frutas" exact element={<Frutas />} />
        <Route path="/mixes" element={<Mixes />} />
      </Routes>
    </>
  );
}

export default App;
