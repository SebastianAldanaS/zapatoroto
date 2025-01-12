import { Outlet,useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { Newsletter } from "../components/home/Newsletter"
import { Banner } from "../components/home/Banner"


export const Rootlayout = () => {

  const { pathname } = useLocation()

  return (
    <div className="h-screen flex flex-col ">

        <Navbar />

        {
            pathname === '/' &&  <Banner />
        }

        <main className="container my-8 mx-auto flex-1">
        <Outlet />
        </main>

        {
            pathname === '/' &&  <Newsletter />
        }

        <Footer />

    </div>

  )
}
