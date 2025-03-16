import Header from "../common/header";
import LeftBar from "../common/leftBar";
import HomePage from "../../pages/homePage";

const UserLayout = () => {

  return (
    <div className="h-[99vh]">
      <div className="sticky">
        <Header  />
      </div>
      <div className=" mx-auto flex justify-between h-[93vh]">
        <div className="px-2 xsm:px-4 xxl:px-8 hidden xl:block">
          <LeftBar />
        </div>
        <div className="flex-1 w-full flex justify-between border-l-[1px] border-l-gray-400 overflow-y-auto">
          <HomePage  />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;