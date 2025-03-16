import Spinner from "../components/loading/spinner";
import PrimaryCard from "../components/cards/primaryCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useDebounce } from "../utils/customHooks/useDebounce";
import { HiMagnifyingGlass } from "react-icons/hi2";
import productData from "../utils/dummyData.json";

const HomePage = () => {
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
    <div className="w-full ">
      <div className="flex space-x-5 justify-between">
        {/* left part */}
        <div className="w-full xl:w-2/3   mx-auto ">
          <div className="my-5  ml-10 ">
            <div className="w-[500px] mx-auto  shadow-md rounded-full relative">
              <input
                type="text"
                placeholder="Explore new product...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 placeholder:font-medium placeholder:text-gray-500 px-4 py-[10px] pl-10 min-w-[200px] md:min-w-[300px] lg:min-w-[500px] pr-12 rounded-4xl focus:outline-none w-full "
              />
              {/* Search icon */}
              <button
                type="submit"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                <HiMagnifyingGlass className="h-6 w-6  cursor-pointer" />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="min-h-[500px] justify-center items-center flex">
              <Spinner />
            </div>
          ) : (
            <div className="">
              {productData.map((item, index: number) => {
                return (
                  <div className="" key={index}>
                    {" "}
                    <PrimaryCard item={item} index={index} />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* right part */}
        <div className="hidden xl:block xl:w-1/3 ">
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default HomePage;
