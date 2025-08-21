import { Link } from "react-router-dom"

export const LoginPage = () => {
    return(
        <div className="bg-[#19191a] min-h-screen text-white">
               <Link to="/"><h1>Home</h1></Link>

               <div className="flex justify-center items-center min-w-3">
                    <form action="" className="flex flex-col gap-4 m-auto max-w-lg bg-blue-950 p-4 rounded-lg min-w-lg ">

                        <h1 className="flex justify-around ">Login</h1>

                        <input type="email" id="email" name="email" required placeholder="Email" />
                        
                        <input type="password" id="password" name="password" required placeholder="Senha" />
                        
                        <button type="submit">Entrar</button>
                    </form>
               </div>
        </div>
    )
}