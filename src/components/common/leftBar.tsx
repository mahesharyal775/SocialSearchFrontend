import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";
import { FaFire } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="flex flex-col justify-between h-[90vh] pr-10">
      <div
        className={`  left-0-0 mt-2 rounded-lg transform transition-transform   duration-500 flex flex-col  z-50  ${
          openSidebar ? "" : "ml-5"
        }  bg-white `}
      >
        <div className="relative text-gray-600">
          {openSidebar ? (
            <IoIosArrowDropleft
              onClick={toggleSidebar}
              className="absolute right-[-65px] top-8 z-50  rounded-full cursor-pointer bg-white h-9 w-9"
            />
          ) : (
            <CgMenuRound
              onClick={toggleSidebar}
              className="absolute right-[-65px] z-50 top-8 rounded-full cursor-pointer bg-white h-9 w-9"
            />
          )}

          <nav className="space-y-4 mt-7">
            <Link
              to="#"
              onClick={toggleSidebar}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 ${
                openSidebar ? "" : "hidden "
              }`}
            >
              <div className="flex items-center space-x-5">
                <FaCircleUser className="h-5 w-5" />
                <p className={`${openSidebar ? "" : "hidden"}`}>Home</p>
              </div>
            </Link>
            <Link
              to="#"
              onClick={toggleSidebar}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 ${
                openSidebar ? "" : "hidden"
              }`}
            >
              <div className="flex items-center space-x-5">
                <IoSettingsOutline className="h-5 w-5" />
                <p className={`${openSidebar ? "" : "hidden"}`}>Setting</p>
              </div>
            </Link>
            <Link
              to="#"
              onClick={toggleSidebar}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 ${
                openSidebar ? "" : "hidden"
              }`}
            >
              <div className="flex items-center space-x-5">
                <FaFire className="h-5 w-5" />
                <p className={`${openSidebar ? "" : "hidden"}`}>Popular</p>
              </div>
            </Link>

            <Link
              to="#"
              onClick={toggleSidebar}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 ${
                openSidebar ? "" : "hidden"
              }`}
            >
              <div className="flex items-center space-x-5">
                <GiBullseye className="h-5 w-5" />
                <p className={`${openSidebar ? "" : "hidden"}`}>Explore</p>
              </div>
            </Link>
            <Link
              to="#"
              onClick={toggleSidebar}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 ${
                openSidebar ? "" : "hidden"
              }`}
            >
              <div className="flex items-center space-x-5">
                <GiBullseye className="h-5 w-5" />
                <p className={`${openSidebar ? "" : "hidden"}`}>All</p>
              </div>
            </Link>

            <Link
              to="#"
              onClick={toggleSidebar}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 ${
                openSidebar ? "" : "hidden"
              }`}
            >
              <div className="flex items-center space-x-5">
                <AiOutlineLogout className="h-5 w-5" />
                <p className={`${openSidebar ? "" : "hidden"}`}>Logout</p>
              </div>
            </Link>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default LeftBar;
