import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import Carousel from "../carousal/Carousal";
import { productDataInterface } from "../../utils/interface/homePageInterface";

interface InterfacePrimaryCard {
  item: productDataInterface;
  index: number;
}

const PrimaryCard = ({ item, index }: InterfacePrimaryCard) => {
  return (
    <div key={index} className="">
      <div
        key={index}
        className="flex flex-col rounded-2xl space-y-5  mt-5 w-[700px]  mx-auto p-2 bg-gray-50"
      >
        <div className="flex justify-between space-x-10 items-center text-gray-700">
          <div className="flex items-center">
            <div className="flex items-center  font-medium space-x-4">
              <img
                className="h-6 w- bg-cover rounded-full"
                src={item.image_urls}
                alt={item.title}
              />
              •<p className="">${item.price}</p>•
              <div className="">{item.vendor}</div>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={item.buy_link}
              target="_blank"
              className="text-white bg-yellow-600 font-medium items-center justify-center flex min-w-[80px] rounded-lg pointer   transition-all ease-in-out duration-300 transform hover:scale-[1.02]"
            >
              Shop
            </a>
            <HiOutlineDotsHorizontal className="text-gray-800 h-7 w-7" />
          </div>
        </div>
        <p className="font-bold text-lg text-gray-700">{item.title}</p>
        <div className="">
          <img
            className="w-full rounded-lg h-[500px] bg-cover"
            src={item.image_urls}
            alt="item"
          />
          {/* <Carousel /> */}
        </div>
        <div className="font-normal text-gray-600">{item.description}</div>

        <a
          href={item.buy_link}
          target="_blank"
          className="hover:underline text-gray-600 text-right mr-5"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default PrimaryCard;
