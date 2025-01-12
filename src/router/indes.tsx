import { createBrowserRouter } from "react-router-dom";
import { Rootlayout } from "../layouts/Rootlayout";
import { AboutPage, HomePage, ShoesPages } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'zapatos',
                element: <ShoesPages />
            },
            {
                path: 'nosotros',
                element: <AboutPage />
            },

        ]
    }
]);