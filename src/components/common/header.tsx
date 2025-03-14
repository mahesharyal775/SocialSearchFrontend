import { FaBars, FaFire, FaRegUserCircle } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { IoAdd, IoSettingsOutline } from "react-icons/io5";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import UserSidebar from "../modal/userSidebar";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

// const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [openUserSidebar, setOpenUserSidebar] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [openSidebarMenu, setOpenSidebarMenu] = useState<boolean>(false);

  const toggleSidebarMenu = () => {
    setOpenSidebarMenu(!openSidebarMenu);
  };

  const toggleUserSidebar = () => {
    setOpenUserSidebar(!openUserSidebar);
    setOpenNotification(false);
  };

  const toggleNotifation = () => {
    setOpenNotification(!openNotification);
    setOpenUserSidebar(false);
  };

  return (
    <header className="border-b  border-gray-200 relative">
      {/* topbar */}
      <div className="mx-10 my-2 flex justify-between items-center">
        <div className=" flex justify-between items-center space-x-4 ">
          <FaBars
            onClick={toggleSidebarMenu}
            className="h-6 w-6 block xl:hidden cursor-pointer"
          />
          <img
            src="https://imgs.search.brave.com/hiUPjen5gy0ShFapkd34F9h0fxByBqG8mItMLHoxfb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bHNlb3Rvb2xzLmNv/bS93ZWJpbWFnZXMv/cHJpY2luZ19pY29u/LnN2Zw"
            alt="icon"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full text-red-500"
          />
        </div>

        <div className="">
          <div className="relative">
            <input
              type="text"
              placeholder="Social Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-[10px] pl-10 min-w-[200px] md:min-w-[300px] lg:min-w-[500px] pr-12 rounded-4xl focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* Search icon */}
            <button
              type="submit"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <BsChatDotsFill className="h-6 w-6 cursor-pointer hover:text-gray-800" />
          <div className="flex justify-center">
            <IoAdd className="h-6 w-6  mr-2 cursor-pointer hover:text-gray-800" />{" "}
            <span className="font-normal text-xl">Create</span>
          </div>
          <div className="z-60">
            <IoMdNotificationsOutline
              onClick={toggleNotifation}
              className="h-7 w-7 cursor-pointer hover:text-gray-800"
            />
            {openNotification && (
              <div className="absolute right-0 z-60 mt-5">
                <div
                  className={`mt-2  shadow-lg rounded-lg transform transition-transform  duration-500 flex flex-col z-50 mr-10 min-h-[300px] min-w-[300px] h-500px  bg-white `}
                >
                  <div className="relative ">
                    <div
                      className="absolute top-2 right-1"
                      onClick={toggleNotifation}
                    >
                      <RxCross2 className="h-5 w-5 cursor-pointer" />
                    </div>
                    <div className="text-gray-800 p-5">
                      <img
                        className="w-[200px] h-[200px] bg-cover mx-auto"
                        src="https://www.redditstatic.com/shreddit/assets/snoovatar-full-hi.png"
                        alt="no notification"
                      />
                      <p className="text-sm">No notification at the monent</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <FaRegUserCircle
              onClick={toggleUserSidebar}
              className="h-7 w-7 cursor-pointer hover:text-gray-800  text-gray-500"
            />
            <div className="h-2 w-2 bg-green-500 rounded-full absolute top-5 right-0"></div>
          </div>
        </div>
      </div>
      <UserSidebar
        openUserSidebar={openUserSidebar}
        toggleUserSidebar={toggleUserSidebar}
      />

      {/* mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          openSidebarMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button>
            <IoMdClose
              onClick={() => setOpenSidebarMenu(!openSidebarMenu)}
              className="h-6 w-6 cursor-pointer text-gray-600"
            />
          </button>
        </div>
        <div className="p-4">
          <nav className="space-y-4 ">
            <Link
              to="#"
              onClick={() => setOpenSidebarMenu}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 `}
            >
              <div className="flex items-center space-x-5">
                <FaCircleUser className="h-5 w-5" />
                <p className={``}>Home</p>
              </div>
            </Link>
            <Link
              to="#"
              onClick={() => setOpenSidebarMenu}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 `}
            >
              <div className="flex items-center space-x-5">
                <IoSettingsOutline className="h-5 w-5" />
                <p className={``}>Setting</p>
              </div>
            </Link>
            <Link
              to="#"
              onClick={() => setOpenSidebarMenu}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 `}
            >
              <div className="flex items-center space-x-5">
                <FaFire className="h-5 w-5" />
                <p className={``}>Popular</p>
              </div>
            </Link>

            <Link
              to="#"
              onClick={() => setOpenSidebarMenu}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 `}
            >
              <div className="flex items-center space-x-5">
                <GiBullseye className="h-5 w-5" />
                <p className={``}>Explore</p>
              </div>
            </Link>
            <Link
              to="#"
              onClick={() => setOpenSidebarMenu}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 `}
            >
              <div className="flex items-center space-x-5">
                <GiBullseye className="h-5 w-5" />
                <p className={``}>All</p>
              </div>
            </Link>

            <Link
              to="#"
              onClick={() => setOpenSidebarMenu}
              className={`block py-2 uppercase text-gray-600 hover:text-black p-5 `}
            >
              <div className="flex items-center space-x-5">
                <AiOutlineLogout className="h-5 w-5" />
                <p className={``}>Logout</p>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
