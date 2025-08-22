import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className="bg-[#19191a] min-h-screen flex items-center justify-center px-4 text-white">
            <div className="absolute top-4 left-4">
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300 text-sm">
                    ← Voltar para Home
                </Link>
            </div>

            <form className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6 text-white">Login</h1>

                <div className="flex flex-col gap-4">
                    <input
                        className="inputLogin"
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                    />

                    <input
                        className="inputLogin"
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Senha"
                    />

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 rounded font-semibold"
                    >
                        Entrar
                    </button>
                </div>

                <p className="mt-6 text-sm text-gray-400 text-center">
                    Não tem uma conta? <Link to="/cadastroUsuario" className="text-indigo-400 hover:underline">Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
};
