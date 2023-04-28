import { SiAcademia } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  const [popup, setPopup] = useState(false);

  const onClickPopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <div className="relative rounded-xl bg-gray-800 pb-2">
        {parseInt(mintedNft) < tokenId && (
          <div className="absolute bg-black w-full h-full bg-opacity-80 rounded-xl flex justify-center items-center text-4xl font-bold">
            Not Minted.
          </div>
        )}
        <Link to={`/${tokenId}`}>
          <img
            className="rounded-t-xl"
            src={metadata.image}
            alt={metadata.name}
          />
        </Link>
        <div className="relative flex justify-between items-center text-gray-400 px-4 pt-4">
          <div className="flex items-center gap-1 font-bold">
            <div>Design By h662</div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full flex justify-center items-center text-black mt-1">
              <SiAcademia size={10} />
            </div>
          </div>
          <button onClick={onClickPopup}>
            <BsThreeDotsVertical size={20} />
          </button>
        </div>
        <div className="text-white px-4 font-bold">{metadata.name}</div>
        <div className="px-4 pt-6 font-bold">
          <div className="text-gray-400 text-sm">판매가</div>
          <div className="text-lg">-</div>
        </div>
        {popup && (
          <div className="bg-gray-800 w-40 h-28 border-[1px] border-white absolute top-[75%] right-[5%] rounded-xl flex flex-col justify-center gap-2 font-bold">
            <button className="w-full flex justify-start pl-4">제안하기</button>
            <button className="w-full flex justify-start pl-4">
              데이터 새로고침
            </button>
            <button className="w-full flex justify-start pl-4">공유하기</button>
          </div>
        )}
      </div>
    </>
  );
};

export default NftCard;
