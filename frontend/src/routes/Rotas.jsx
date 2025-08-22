import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Layout } from "../components/layout/Layout"
import { PageNotFound } from "../pages/PageNotFound"
import { LoginPage } from "../pages/LoginPage"
import { CadastroUsuarios } from "../pages/CadastroUsuarios"

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                        <Route path="/*" element={<PageNotFound />} />
                </Route>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastroUsuario" element={<CadastroUsuarios/>} />
            </Routes>
        </BrowserRouter>
    )
}