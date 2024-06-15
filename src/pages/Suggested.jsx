import Profile from "../pages/home/components/Profile"
import SuggestedProfile from "./home/components/SuggestedProfile"
function Suggested() {
    return (
        <div className="px-4 py-4 hidden md:flex text-light col-span-2 flex flex-col items-center ">
            <div className="w-[450px] mt-4">
                <Profile></Profile>
                <SuggestedProfile></SuggestedProfile>
            </div>
        </div>
    )
}

export default Suggested
