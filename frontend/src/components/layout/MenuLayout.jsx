import { Link } from "react-router-dom"

export const MenuLayout = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <Link to="/"><h1>Dreams Motors 2.0</h1></Link>
            <Link to="/login">Login</Link>
            <Link to="/cadastroUsuario">Cadastro</Link>
        </div>
    )
}