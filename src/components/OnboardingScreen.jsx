
import { Link } from "react-router-dom"
import "./style.css"
function OnboardingScreen({ theme, setTheme }) {

    return (
        <div className="sm:hidden px-4 sm:px-12 lg:px-24 xl:px-40 flex flex-col justify-center items-center h-[100vh] gap-40 pt-20 dark:text-white dark:bg-gradient-to-b from-black via-purple-900 to-black " >
            <p className="flex flex-col items-center">
                Enjoy quality music <span>anytime anywhere</span> <span>any day</span>
            </p>


            <Link to="/login" className="text-end text-[13px] text-white bg-zinc-800 px-6 py-3 rounded-sm dark:text-center dark:text-sm dark:bg-purple-900">Getting started</Link>
        </div>
    )
}

export default OnboardingScreen