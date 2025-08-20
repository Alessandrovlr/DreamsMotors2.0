import { Outlet } from "react-router-dom"
import { FooterLayout } from "./FooterLayout"
import { MenuLayout } from "./MenuLayout"

export const Layout = () => {
    return(
        <div>
            <MenuLayout/>
            <main>
                <Outlet/>
            </main>
            <FooterLayout/>
        </div>
    )
}