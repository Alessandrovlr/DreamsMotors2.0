import { Link } from "react-router-dom";

export const CadastroUsuarios = () => {
    return (
        <div className="bg-[#19191a] min-h-screen flex items-center justify-center px-4 text-white">
            <div className="absolute top-4 left-4">
                <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition duration-300 text-sm"
                >
                    ← Voltar para Home
                </Link>
            </div>

            <form className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6 text-white">
                    Cadastro de Usuários
                </h1>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        placeholder="Digite seu nome"
                        className="inputLogin"
                    />

                    <input
                        type="text"
                        id="login"
                        name="login"
                        required
                        placeholder="Escolha um login"
                        className="inputLogin"
                    />

                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        required
                        placeholder="Crie uma senha segura"
                        className="inputLogin"
                    />

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 rounded font-semibold mt-4"
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};
