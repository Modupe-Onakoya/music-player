import asset from "../assets/asset"
import MobileHomePage from "./MobileHomePage"

function MusicHomePage() {
    return (

        <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-5 sm:hidden">

            <div className="flex justify-between">
                <p className="flex">Muzir <img src={asset.logo} alt="" /></p>
                <input type="text" className="bg-gray-300 rounded-lg px-1" placeholder="Discover" />
                <img src={asset.logo} alt="" className="bg-gray-300 rounded-full" />


            </div>

            <div className="flex flex-col gap-1">
                <MobileHomePage />
                <MobileHomePage />
                <MobileHomePage />



            </div>

        </div>

    )
}
export default MusicHomePage