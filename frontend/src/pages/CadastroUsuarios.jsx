import { Link } from "react-router-dom"

export const CadastroUsuarios = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <div>
                <form action="" className="flex flex-col gap-4 max-w-sm bg-amber-300 m-auto">
                    <h1>Cadastro de Usuários</h1>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="Login">Login:</label>
                    <input type="login" id="login" name="login" required />

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}