import { Link } from "react-router-dom"

export const Banner = () => {
    return <div className="relative bg-gray-900 text-white">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full" 
            style={{ backgroundImage: 'url(/img/fondozapatos.webp)' }}/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4 lg:text-6xl">Bienvenidos a nuestra tienda</h1>
                    <p className="text-lg mb-8 lg:text-2xl">En donde encontraras todo tipo de calzados</p>
                    <Link to={'/logos'} className="bg-red-700 hover:bg-gray-950 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300  ease-in-out">
                        Ver productos
                    </Link>
            </div>
                

    </div>
}