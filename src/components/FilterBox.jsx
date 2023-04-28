import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

const FilterBox = ({ mintedNft, nfts }) => {
  const [isBoxClose, setIsBoxClose] = useState(false);
  const [isSelling, setIsSelling] = useState(false);
  const [isETCorUSDC, setIsETCorUSDC] = useState(true);

  const AttributesTraitType = [
    "Background",
    "Face",
    "Eyebrows",
    "Eyes",
    "Nose",
    "Mouth",
    "ACC",
  ];

  const OnClickFilterBox = () => {
    setIsBoxClose(!isBoxClose);
  };
  const OnClickSellingBar = () => {
    setIsSelling(!isSelling);
  };
  const OnClickChangeCoin = () => {
    setIsETCorUSDC(!isETCorUSDC);
  };

  return (
    <>
      {isBoxClose ? (
        <button
          onClick={OnClickFilterBox}
          className="bg-gray-200 h-24 w-[58px] rounded-r-2xl justify-center items-center hidden lg:inline-block"
        >
          <div className="text-black pl-3">
            <FaFilter size={30} />
          </div>
        </button>
      ) : (
        <div className="bg-black h-[1000px] w-[370px] rounded-r-3xl pt-6 pl-7 hidden lg:inline-block overflow-y-scroll scrollbar-hide">
          <div className="flex items-center font-bold">
            <div
              onClick={OnClickFilterBox}
              className="w-8 h-8 bg-gray-800 flex justify-center items-center rounded-full"
            >
              <MdArrowBackIosNew size={20} />
            </div>
            <div className="text-xl ml-2">필터</div>
          </div>
          <div className="bg-gray-800 mt-8 w-[250px] h-20 rounded-2xl flex items-center">
            <div className="ml-4 font-bold">판매중인 아이템</div>
            <button
              onClick={OnClickSellingBar}
              className={`ml-16 h-8 w-[55px] rounded-full flex items-center ${
                isSelling
                  ? "bg-yellow-400 justify-end"
                  : "bg-gray-500 justify-start border-2 border-gray-500"
              }`}
            >
              <div className="h-[28px] w-[28px] bg-white rounded-full"></div>
            </button>
          </div>
          <div className="flex flex-col justify-center mt-10">
            <div className="text-xl font-bold ml-2">가격범위</div>
            <div className="bg-gray-800 mt-4 w-[250px] h-36 rounded-2xl flex flex-col justify-center items-center">
              <div className="bg-gray-500 w-[200px] h-6 rounded-md flex justify-around">
                <button
                  onClick={OnClickChangeCoin}
                  className={`h-full w-1/2 rounded-l-md ${
                    isETCorUSDC ? "bg-white text-gray-600" : ""
                  }`}
                >
                  ETH
                </button>
                <button
                  onClick={OnClickChangeCoin}
                  className={`h-full w-1/2 rounded-r-md ${
                    isETCorUSDC ? "" : "bg-white text-gray-600"
                  }`}
                >
                  USDC
                </button>
              </div>
              <div className="w-[200px] h-[60px] rounded-md mt-4 flex justify-between font-bold">
                <input
                  className="bg-gray-700 h-full w-[95px] rounded-lg pl-2"
                  type="number"
                  placeholder={`${isETCorUSDC ? "ETH" : "USDC"}`}
                />
                <input
                  className="bg-gray-700 h-full w-[95px] rounded-lg pl-2"
                  type="number"
                  placeholder={`${isETCorUSDC ? "ETH" : "USDC"}`}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-10 pb-10">
              <div className="text-xl font-bold ml-2">프로퍼티</div>
              <div className="mt-4">
                <ul className="w-[250px] grid grid-cols-1 gap-4 text-white font-bold">
                  {AttributesTraitType.map((v, i) => {
                    return (
                      <li
                        key={i}
                        className="bg-gray-800 h-[72px] rounded-2xl flex justify-between items-center"
                      >
                        <div className="pl-5">{v}</div>
                        <button className="pr-6">
                          <SlArrowDown />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBox;
