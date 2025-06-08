import { createBrowserRouter } from "react-router";
import Main from "../pages/main";
import MainNavbar from "../pages/constNavbar";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AuthenticationForm from "../pages/Login";
import About from "../pages/About"
import AboutMain from "../pages/AboutMain";
import ContentAbout from "../pages/ContentAbout";
import Doctors from "../pages/Doctors"
import  {ContentAbouttwo} from "../pages/ContentAbout"
import Teethwhitening from "../pages/service/Teethwhitening";
import Orthodontics from "../pages/service/Orthodontics";
import Veneers from "../pages/service/Veneers"
import CosmeticFillings from "../pages/service/CosmeticFillings";
import DentalImplants from "../pages/service/DentalImplants";
import DentalProsthetics from "../pages/service/DentalProsthetics";
import GeneralAnesthesia from "../pages/service/GeneralAnesthesia";
import LaserGumbeAutification from "../pages/service/LaserGumbeAutification";
import PediatricDentistry from "../pages/service/PediatricDentistry";
import RootCanalTreatment from "../pages/service/RootCanalTreatment";
export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<MainNavbar/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'home',
                    element:<Home/>
                },
                {
                    path:'services',
                    element:<Services/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
                {
                    path:'login',
                    element:<AuthenticationForm />
                },
                {
                    path:'about',
                    element:<About/>
        
                },
                {
                    path:'doctors',
                    element:<Doctors/>
                },
                {
                    path:'Teeth-Whitening',
                    element:<Teethwhitening/>
                },
                {
                    path:'Orthodontics',
                    element:<Orthodontics/>
                },
                {
                    path:'GeneralAnesthesia',
                    element:<GeneralAnesthesia/>
                },
                {
                    path:'PediatricDentistry',
                    element:<PediatricDentistry/>
                },
                {
                    path:'DentalProsthetics',
                    element:<DentalProsthetics/>
                },
                {
                    path:'Veneers',
                    element:<Veneers/>
                },
                {
                    path:'DentalImplants',
                    element:<DentalImplants/>
                },
                {
                    path:'LaserGumbeAutification',
                    element:<LaserGumbeAutification/>
                },
                {
                    path:'RootCanalTreatment',
                    element:<RootCanalTreatment/>
                },
                {
                    path:'CosmeticFillings',
                    element:<CosmeticFillings/>
                }

            ]
        },
        {
            path:'/about',
            element:<AboutMain/>,
            children:[
                {
                    path:'what',
                    element:<ContentAbout/>
                },
                {
                    path:'our',
                    element:<ContentAbouttwo/>
                },
                {
                    path:'goal',
                    element:<ContentAbouttwo/>
                }
            ]
        }

    ]
)