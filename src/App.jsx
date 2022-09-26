import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Missionpage from "./pages/Missionpage";
import Myprofilepage from "./pages/Myprofilepage";
import Rocketspage from "./pages/Rocketspage";

const App = () => (
  <>
    <Navbar />
    <div className="main">
      <Routes>
        <Route path="/Rockets" element={<Rocketspage />} />
        <Route path="/Missions" element={<Missionpage />} />
        <Route path="/Myprofile" element={<Myprofilepage />} />
      </Routes>
    </div>
  </>
);

export default App;
