import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faMessage,
  faPlus,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="hidden  md:flex h-full col-span-1  px-4  py-4 flex-col justify-between">
      <div>
        <div className="max-w-40 mt-4">
          <Link to="/">
            <img
              className="w-full me-auto block "
              src="/images/main-logo.png"
              alt="Main logo"
            />
          </Link>
        </div>
        <ul className="mt-8 flex flex-col gap-2">
          <li className="space-x-3 text-left hover:bg-gray-700 hover:cursor-pointer p-3 rounded">
            <FontAwesomeIcon icon={faHouse} className="text-xl text-accent_soft" />
            <Link to="/home" className="text-lg text-accent_soft">
              Home
            </Link>
          </li>
          <li className="space-x-3 text-left hover:bg-gray-700 hover:cursor-pointer p-3 rounded">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-neutral-300" />
            <Link className="text-xl text-neutral-300">Serach</Link>
          </li>
          <li className="space-x-3 text-left hover:bg-gray-700 hover:cursor-pointer p-3 rounded">
            <FontAwesomeIcon icon={faMessage} className=" text-neutral-300"/>
            <Link className="text-lg text-neutral-300">Messages</Link>
          </li>
          <li className="space-x-3 text-left hover:bg-gray-700 hover:cursor-pointer p-3 rounded">
            <FontAwesomeIcon icon={faPlus} className="text-lg text-neutral-300" />
            <Link className="text-lg text-neutral-300">Create</Link>
          </li>
          <li className="space-x-3 text-left hover:bg-gray-700 hover:cursor-pointer p-3 rounded">
            <FontAwesomeIcon icon={faUserNinja} className="text-xl text-neutral-300" />
            <Link className="text-lg text-neutral-300">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="hover:bg-gray-700 hover:cursor-pointer p-3 rounded ">
        <Link className="text-xl text-red-7`00">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
