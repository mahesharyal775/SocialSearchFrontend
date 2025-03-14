import { useEffect, useState } from "react";
import { useDebounce } from "../../utils/customHooks/useDebounce";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../common/header";
import LeftBar from "../common/leftBar";
import HomePage from "../../pages/homePage";
import data from "../../utils/dummyData.json";

const UserLayout = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm);
  const [loading, setLoading] = useState<boolean>(false);

  const createPost = async () => {
    setLoading(true);
    // const url = 'http://0.0.0.0:8000/search'
    const url = "http://localhost:8000/search";

    const dataBody = {
      query: debouncedSearch,
      top_k: 5,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(url, dataBody, config);
      toast.success("Data fetched successfully!");
      console.log(response);
      setLoading(false);
    } catch (error: any) {
      console.error("Error while fetching data", error);
      // toast.error(error.message)
      setLoading(false);
    }
  };

  useEffect(() => {
    debouncedSearch.length > 0 && createPost();
  }, [debouncedSearch]);

  return (
    <div className="h-full">
      <div className="sticky">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className=" mx-auto flex justify-between h-[93vh]">
        <div className="px-2 xsm:px-4 xxl:px-8 hidden xl:block">
          <LeftBar />
        </div>
        <div className="flex-1 w-full flex justify-between border-l-[1px] border-l-gray-400 overflow-y-auto">
          <HomePage loading={loading} productData={data} />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
