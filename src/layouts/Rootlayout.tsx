import { Outlet } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"


export const Rootlayout = () => {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        <main className="container my-8 mx-auto flex-1">

        <Outlet />
        </main>
        <Footer />
    </div>

  )
}
