import { Outlet } from "react-router-dom"
import { FooterLayout } from "./FooterLayout"
import { MenuLayout } from "./MenuLayout"

export const Layout = () => {
    return(
        <div className="bg-[#19191a] text-white min-h-screen">
            <MenuLayout/>
            <main className="p-4 ">
                <Outlet/>
            </main>
            <FooterLayout/>
        </div>
    )
}