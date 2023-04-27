import { useEffect, useState } from "react";
import axios from "axios";
import FilterBox from "./FilterBox";
import NftCard from "./NftCard";
import { FaEthereum } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

const Body = ({ page, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);

    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white  pr-4 ${
            i === page - 1 ? "" : "border-gray-400 border-r-4"
          } ${i + 1 === selectedPage ? "text-white" : "text-gray-400"}`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1}
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  useEffect(() => {
    getNfts(1);
  }, []);

  return (
    <>
      <div className="flex justify-between border-b-[1px] border-gray-500 p-5 font-bold text-gray-500">
        <div className="flex gap-6">
          <div>아이템</div>
          <div>활동내역</div>
        </div>
        <div className="flex gap-4">
          <FaEthereum size={25} />
          <BsDiscord size={25} />
          <BsTwitter size={25} />
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <div className="flex my-6 pb-12">
        <FilterBox />
        <div className="w-full px-8">
          <div className="flex justify-between items-center font-bold">
            <div className="flex gap-2 items-center">
              <button className="bg-gray-700 h-9 w-9 flex justify-center items-center rounded-xl">
                <AiOutlineReload size={20} />
              </button>
              <div>{mintedNft}개의 NFT</div>
            </div>
            <div>{pageComp()}</div>
            <div>낮은 가격순</div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-6 mt-8">
            {nfts ? (
              nfts.map((v, i) => {
                return (
                  <NftCard key={i} tokenId={v.tokenId} metadata={v.metadata} />
                );
              })
            ) : (
              <div>로딩중입니다...</div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Body;
