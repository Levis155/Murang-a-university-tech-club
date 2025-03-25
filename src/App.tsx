import Home from "./Pages/Home/Home";
import Leadership from "./Pages/Leadership/Leadership";
import Tracks from "./Pages/Tracks/Tracks";
import Events from "./Pages/Events/Events";
import { Route, Routes} from "react-router-dom"
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Leadership" element={<Leadership />} />
      <Route path="/Tracks" element={<Tracks />} />
      <Route path="/Events" element={<Events />} /> 
      </Routes>      
    </React.Fragment>
  )
}

export default App
