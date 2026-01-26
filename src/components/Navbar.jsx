
import { Link } from "react-router-dom"
import asset from "../assets/asset"
import "./style.css"
function Navbar() {
    return (
        <div className="  dark:text-white">
            <div className="flex justify-between  overflow-hidden">
                <img src={asset.logo} alt="" />

                <u className="flex gap-2 lg:gap-20  max-lg:text-[10px]   ">
                    <a href="" className="bg-gray-300 rounded-sm px-6 py-1 h-fit dark:bg-black ">home</a>
                    <a href="" className="bg-gray-300 rounded-sm px-6 py-1 h-fit dark:bg-black "> about</a>
                    <a
                        href="" className="bg-gray-300 rounded-sm px-6 py-1 h-fit dark:bg-purple-900  dark:text-white dark:px-6 dark:py-1 max-lg:mr-2"> sign up</a>


                    <Link to="/signup" className="bg-gray-300 rounded-sm px-6 py-1 h-fit dark:bg-white dark:text-purple-900 dark:px-6 dark:py-1  " >Login </Link>
                </u>
            </div>

        </div>
    )
}

export default Navbar