const brands = [
    { Image: "/img/brands/Adidas-Logo.webp", alt: "Adidas" },
    { Image: "/img/brands/Nike-Logo.webp", alt: "Nike" },
    { Image: "/img/brands/Puma-Logo.webp", alt: "Puma" },
    { Image: "/img/brands/Reebok-Logo.webp", alt: "Reebok" },
    { Image: "/img/brands/Fila-Logo.webp", alt: "Fila" },
    { Image: "/img/brands/Converse-Logo.webp", alt: "Converse" },
];

export const Brands = () => {
    return <div className="flex flex-col items-center gap-3 pt-16 pb-12">
        <h2 className="font-bold text-2xl"> Marcas disponibles</h2>
        <p className="w-2/3 text-center text-sm md:text-base">
        Marcas de calzados disponibles en nuestra tienda online
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
            {brands.map((brand, index) => (
                <div key={index}>
                    <img 
                        src={brand.Image} 
                        alt={brand.alt} 
                    />
                </div>))}
        </div>
    </div>
}