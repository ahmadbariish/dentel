/** @format */

import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home";
// Services
import Teethwhitening from "./pages/services/Teethwhitening";

import Orthodontics from "./pages/services/Orthodontics";
import PediatricDentistry from "./pages/services/PediatricDentistry";
import DentalProsthetics from "./pages/services/DentalProsthetics";
import Veneers from "./pages/services/Veneers";
import DentalImplants from "./pages/services/DentalImplants";
import LaserGumbeAutification from "./pages/services/LaserGumbeAutification";
import RootCanalTreatment from "./pages/services/RootCanalTreatment";

import { Route, Routes } from "react-router-dom";
export default function Rout() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/services' element={<Services />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Teeth-Whitening' element={<Teethwhitening />} />

      <Route path='/Orthodontics' element={<Orthodontics />} />

      <Route path='/PediatricDentistry' element={<PediatricDentistry />} />
      <Route path='/DentalProsthetics' element={<DentalProsthetics />} />
      <Route path='/Veneers' element={<Veneers />} />
      <Route path='/DentalImplants' element={<DentalImplants />} />
      <Route
        path='/LaserGumbeAutification'
        element={<LaserGumbeAutification />}
      />
      <Route path='/RootCanalTreatment' element={<RootCanalTreatment />} />
    </Routes>
  );
}
