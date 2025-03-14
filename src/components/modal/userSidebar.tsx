import { AiOutlineLogout } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

interface UserSidebarProps {
  openUserSidebar: boolean;
  toggleUserSidebar: () => void;
}

const UserSidebar = ({
  openUserSidebar,
  toggleUserSidebar,
}: UserSidebarProps) => {
  return (
    <div
      className={`fixed  right-0 mt-2 ${
        openUserSidebar ? "mr-5" : ""
      }  shadow-lg rounded-lg transform transition-transform  duration-500 flex flex-col z-50  h-500px  bg-white ${
        openUserSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative ">
        <div className="absolute top-2 right-1" onClick={toggleUserSidebar}>
          <RxCross2 className="h-5 w-5 cursor-pointer" />
        </div>

        <nav className="space-y-4 mt-7">
          <Link
            to="#"
            onClick={toggleUserSidebar}
            className="block py-2 uppercase text-gray-600 hover:text-black p-5"
          >
            <div className="flex items-center space-x-5">
              <FaCircleUser className="h-5 w-5" />
              <p className="">View Profile</p>
            </div>
          </Link>
          <Link
            to="#"
            onClick={toggleUserSidebar}
            className="block py-2 uppercase text-gray-600 hover:text-black p-5"
          >
            <div className="flex items-center space-x-5">
              <IoSettingsOutline className="h-5 w-5" />
              <p className="">Setting</p>
            </div>
          </Link>
          
          <Link
            to="#"
            onClick={toggleUserSidebar}
            className="block py-2 uppercase text-gray-600 hover:text-black p-5"
          >
            <div className="flex items-center space-x-5">
              <GiBullseye   className="h-5 w-5" />
              <p className="">Advertise</p>
            </div>
          </Link>

          <Link
            to="#"
            onClick={toggleUserSidebar}
            className="block py-2 uppercase border-t-[1px] text-gray-600 hover:text-black p-5"
          >
            <div className="flex items-center space-x-5">
              <AiOutlineLogout  className="h-5 w-5" />
              <p className="">Logout</p>
            </div>
          </Link>

        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;
