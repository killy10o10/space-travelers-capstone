import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Missionpage from "./pages/Missionpage";
import Myprofilepage from "./pages/Myprofilepage";
import Rocketspage from "./pages/Rocketspage";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rocketspage />} />
      <Route path="/mission" element={<Missionpage />} />
      <Route path="/profile" element={<Myprofilepage />} />
    </Routes>
  </>
);

export default App;
