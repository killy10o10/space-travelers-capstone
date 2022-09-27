import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Missionpage from "./pages/Missionpage";
import Myprofilepage from "./pages/Myprofilepage";
import Rocketspage from "./pages/Rocketspage";
import store from "./Redux/configstore";

const App = () => (
  <>
    <Navbar />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Rocketspage />} />
        <Route path="/mission" element={<Missionpage />} />
        <Route path="/profile" element={<Myprofilepage />} />
      </Routes>
    </Provider>
  </>
);

export default App;
