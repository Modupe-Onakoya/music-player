import Navbar from "./Navbar";
import Home from "./Home";

function LandingPage() {
    return (
        <div className=" dark:bg-gradient-to-b from-black via-purple-900 to-black dark:h-[100vh] max-sm:hidden px-4 sm:px-12 lg:px-20 xl:px-40 pt-10 ">
            <Navbar />
            <Home />
        </div>
    )
}
export default LandingPage;