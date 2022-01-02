import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        // Colocamos <BrowserRouter> por unica vez en la ruta padre
        <BrowserRouter>

            <Routes>
                {/* El login no posee barra de navegación, por lo que lo dejamos separado */}
                <Route path="/login" element={<LoginScreen />} />
                {/* Agrego / y luego el resultado de DashboardRoutes donde se colocará la url que corrresponda */}
                <Route path="/*" element={<DashboardRoutes />} />

            </Routes>

        </BrowserRouter>
    )
}
