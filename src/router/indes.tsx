import { createBrowserRouter } from "react-router-dom";
import { Rootlayout } from "../layouts/Rootlayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <div>Inicio</div>
            },
            {
                path: 'zapatos',
                element: <div>Zapatos</div>
            },
            {
                path: 'nosotros',
                element: <div>Sobre Nosotros</div>
            },

        ]
    }
]);