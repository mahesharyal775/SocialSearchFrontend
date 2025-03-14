import { Link } from "react-router-dom";
import Spinner from "../components/loading/spinner";
import PrimaryCard from "../components/cards/primaryCard";
import RightCard from "../components/cards/rightCard";
import { productDataInterface } from "../utils/interface/homePageInterface";

// const data = [
//   {
//     avatar:
//       "https://styles.redditmedia.com/t5_2rf5w/styles/communityIcon_21t7rr0nl7be1.JPEG",
//     username: "drewme",
//     time: "12 hr ago",
//     info: "Because you have shown similar intest",
//     post: {
//       title: "Shop the latest collection ??😍🙏 ",
//       image:
//         "https://imgs.search.brave.com/uIUsQnBJnWbivsO3Z6C6vLMrHidmBZTiNinLFiKxdW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHkteW91bmct/c3R5bGlzaC13b21h/bi1waW5rLWx1eHVy/eS1kcmVzcy11c2lu/Zy1tb2JpbGUtcGhv/bmUtaG9sZGluZy1z/aG9wcGluZy1iYWdz/XzI4NTM5Ni05Njcz/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
//     },
//   },
//   {
//     avatar:
//       "https://styles.redditmedia.com/t5_2rf5w/styles/communityIcon_21t7rr0nl7be1.JPEG",
//     username: "drewme",
//     time: "12 hr ago",
//     info: "Because you have shown similar intest",
//     post: {
//       title: "Shop the latest collection ??😍🙏 ",
//       image:
//         "https://imgs.search.brave.com/uIUsQnBJnWbivsO3Z6C6vLMrHidmBZTiNinLFiKxdW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHkteW91bmct/c3R5bGlzaC13b21h/bi1waW5rLWx1eHVy/eS1kcmVzcy11c2lu/Zy1tb2JpbGUtcGhv/bmUtaG9sZGluZy1z/aG9wcGluZy1iYWdz/XzI4NTM5Ni05Njcz/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
//     },
//   },
//   {
//     avatar:
//       "https://styles.redditmedia.com/t5_2rf5w/styles/communityIcon_21t7rr0nl7be1.JPEG",
//     username: "drewme",
//     time: "12 hr ago",
//     info: "Because you have shown similar intest",
//     post: {
//       title: "Shop the latest collection ??😍🙏 ",
//       image:
//         "https://imgs.search.brave.com/uIUsQnBJnWbivsO3Z6C6vLMrHidmBZTiNinLFiKxdW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHkteW91bmct/c3R5bGlzaC13b21h/bi1waW5rLWx1eHVy/eS1kcmVzcy11c2lu/Zy1tb2JpbGUtcGhv/bmUtaG9sZGluZy1z/aG9wcGluZy1iYWdz/XzI4NTM5Ni05Njcz/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
//     },
//   },
// ];

const testData = [
  {
    img1: "https://imgs.search.brave.com/cOGlKsM2ir_8-IFclWuDH9HV6BHb1OfidRiXBWmhQzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/cGhnL3N0eWxlcy9j/b21tdW5pdHlJY29u/X3BzbDdtYzdpdzlh/ZDEucG5n",
    img2: "https://imgs.search.brave.com/x621Uq5D7SWrA-NmzO7urzYtGuGkDbZE72KqyvjJ200/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF4UnF3SnVxSUwu/X0FDLl9TUjE4MCwy/MzAuanBn",
    name1: "Ecom test",
    name2: "This is the test to the product",
    data1: "12K upvotes",
    data2: "362 comment",
  },
  {
    img1: "https://imgs.search.brave.com/x621Uq5D7SWrA-NmzO7urzYtGuGkDbZE72KqyvjJ200/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF4UnF3SnVxSUwu/X0FDLl9TUjE4MCwy/MzAuanBn",
    img2: "https://imgs.search.brave.com/cOGlKsM2ir_8-IFclWuDH9HV6BHb1OfidRiXBWmhQzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/cGhnL3N0eWxlcy9j/b21tdW5pdHlJY29u/X3BzbDdtYzdpdzlh/ZDEucG5n",
    name1: "New jacket",
    name2: "Hurry up new arrival",
    data1: "12K upvotes",
    data2: "362 comment",
  },
];

const linkData = [
  {
    name: "Social Search",
    link: "socialSearch",
  },
  {
    name: "Privacy Policy",
    link: "privacyPolicy",
  },
  {
    name: "User Aggrement",
    link: "userAggrement",
  },
];

interface FetchDataInterface {
  loading: boolean;
  productData: productDataInterface[];
}

const HomePage = ({ loading, productData }: FetchDataInterface) => {
  return (
    <div className="w-full ">
      {loading ? (
        <div className="flex items-center justify-center min-h-[700px]">
          <Spinner />
        </div>
      ) : (
        <div className="flex space-x-5 justify-between">
          {/* left part */}
          <div className="w-full xl:w-2/3   mx-auto ">
            <div className="border-gray-200 text-center text-gray-600 font-semibold text-xl my-5">
              Explore new and elegent designed product
            </div>

            {productData.map((item, index: number) => {
              return (
                <div className="" key={index}>
                  {" "}
                  <PrimaryCard item={item} index={index} />
                </div>
              );
            })}

            {/* {data.map((item, index) => {
              // return <TestCard item={item} index={index} />;
            })} */}
          </div>

          {/* right part */}
          <div className="hidden xl:block xl:w-1/3 ">
            <div className=" h-full fixed z-0">
              <div className=" flex flex-col gap-4 lg:w-[300px] xl:min-w-[400px] lg:mr-[100px] 2xl:mr-[300px] my-auto overflow-y-auto justify-between  top-0  z-0  h-full">
                <div className="mt-5 ">
                  <div className="bg-gray-50 rounded-lg ">
                    <p className=" text-lg p-5">Recent Post</p>

                    {testData.map((item, index) => {
                      return (
                        <div key={index} className="">
                          {" "}
                          <RightCard item={item} index={index} />{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-20">
                  <div className="flex items-start space-x-5">
                    {linkData.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className={`block py-2  hover:text-gray-600 `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <p className="block">
                    Search, Inc. © 2025. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
