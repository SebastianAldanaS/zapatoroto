import { Brands } from "../components/home/Brands"
import { FeatureGrid } from "../components/home/FeatureGrid"
import { ProductGrid } from "../components/home/ProductGrid"
import { popularShoes, recentsShoes } from "../data/initialData"
import { prepareProducts } from "../helpers"

export const HomePage = () => {

    const prepareRecentProducts = prepareProducts(recentsShoes)
    const preparePopularProducts = prepareProducts(popularShoes)


    return <div className="home-page " >
        <FeatureGrid />

        <ProductGrid
        title="Nuevos Productos"
        products={prepareRecentProducts}
        />

        <ProductGrid
        title="Productos Destacados"
        products={preparePopularProducts}
        />

        <Brands />
    </div>
}