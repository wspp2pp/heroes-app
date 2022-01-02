import { Route, Routes } from "react-router-dom";

import { Navbar } from "../ui/NavBar"
import { DcScreen } from '../dc/DcScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { HeroScreen } from "../hero/HeroScreen";


export const DashboardRoutes = () => {
    return (
        <>  
            {/* Barra de navegación */}
            <Navbar/>

            <div className="container">
                <Routes>

                    {/* Asigno componente a un url */}

                    <Route path="marvel" element={<MarvelScreen />} />

                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />

                    {/* Si recibo hero/x guardo el valor de x y redirecciono a hero/x*/}

                    <Route path="hero/:heroId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />

                </Routes>
            </div>
        </>
    )
}
