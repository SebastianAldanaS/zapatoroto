export const Newsletter = () => {
  return (
      <div className="relative bg-gray-500 text-white py-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full" 
          style={{ backgroundImage: 'url(/img/bannerzapatos.webp)' }}/>

          {/* Content */}
          <div className="container z-10 relative p-5 md:p-0">
              <div className="bg-black bg-opacity-90 p-5 md:p-10 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Suscribete a nuestro boletin</h2>
                  <p className="mb-4">Recibe ofertas exclusivas y noticias de nuestros productos</p>
                  <div className="flex flex-col md:flex-row gap-2">
                      <input type="email" placeholder="Tu correo electronico" className="bg-black-100 text-black rounded-lg p-2 focus:outline-none"/>
                      <button className="bg-red-700 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition duration-300  ease-in-out">Suscribirme</button>
                  </div>
              </div>           
          </div>
  </div>
  )
}