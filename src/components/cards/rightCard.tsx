const RightCard = ({item, index}:any) => {
    return (
      <div
        key={index}
        className="flex justify-between my-5  text-gray-600 p-5 border-t-[1px] border-gray-300"
      >
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <img
              src={item.img1}
              alt="img"
              className="h-[20px] w-[20px] rounded-lg"
            />
            <span className="text-sm">{item.name1}</span>
          </div>
          <a href="#" className="my-3 font-medium hover:underline">
            {item.name2}
          </a>
          <div className="flex space-x-1 text-xs mt-2">
            <p className="">{item.data1}</p>
            <p className="">{item.data2}</p>
          </div>
        </div>
        <img src={item.img2} alt="img" className="h-[50px] w-[50px] rounded-lg" />
      </div>
    );
  };
  
  export default RightCard;
  