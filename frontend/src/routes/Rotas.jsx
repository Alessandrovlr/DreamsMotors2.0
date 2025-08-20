import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Layout } from "../components/layout/Layout"
import { PageNotFound } from "../pages/PageNotFound"

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                        <Route path="/*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}