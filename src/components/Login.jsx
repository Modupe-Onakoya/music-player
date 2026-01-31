import { useState } from "react"
import asset from "../assets/asset"
import { Link } from "react-router-dom"

function Login() {

    const [formData, setFormData] = useState({ email: "", password: "" })



    return (

        <div className="px-4 max-sm:pt-10 sm:px-12 lg:px-24 xl:px-40  dark:text-white dark:bg-gradient-to-b from-black via-purple-900 to-black h-[100vh] ">

            <form action="" className="flex flex-col  items-center  gap-5 py-4 text-sm ">
                <div className="flex max-sm:flex-col max-sm:w-[80%] max-sm:space-y-1">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" className="bg-gray-300 w-[100%] rounded-lg px-2 py-1.5 dark:bg-white dark:text-black" placeholder="email" />

                </div>
                <div className="flex max-sm:flex-col w-[80%] space-y-1">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" className="bg-gray-300 w-[100%] rounded-lg px-2 py-1.5 text-sm dark:bg-white dark:text-black " placeholder="password" />
                    <p className="text-gray-300 text-end text-[10px] dark:text-white ">forget password</p>

                </div>
                <Link to="/home" className="text-center bg-gray-300 w-[80%] rounded-lg py-1.5 px-10 dark:bg-white dark:text-black" >Sign in</Link>


                <p className="text-[10px] text-center dark:text-white text-gray-300 ">Dont have an account yet sign in</p>




                or,
                <div className="w-[80%] space-y-2 text-center max-sm:text-sm">
                    <p className="border rounded-xl py-1 px-8  w-[100%]">Continue with google</p>
                    <p className="border rounded-xl py-1 px-8  w-[100%]">Continue with facebook</p>
                    <p className="border rounded-xl py-1 px-8  w-[100%]">Continue with apple</p>
                </div>
            </form>
        </div>
    )
}

export default Login