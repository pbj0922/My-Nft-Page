import { SiAcademia } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata }) => {
  return (
    <Link to={`/${tokenId}`}>
      <div className="rounded-xl bg-gray-700 pb-4">
        <img
          className="rounded-t-xl"
          src={metadata.image}
          alt={metadata.name}
        />
        <div className="flex justify-between items-center text-gray-400 px-4 pt-4">
          <div className="flex items-center gap-1 font-bold">
            <div>Design By h662</div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full flex justify-center items-center text-black mt-1">
              <SiAcademia size={10} />
            </div>
          </div>
          <div>
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
        <div className="text-white px-4 font-bold">{metadata.name}</div>
        <div className="px-4 pt-6 font-bold">
          <div className="text-gray-400 text-sm">판매가</div>
          <div className="text-lg">-</div>
        </div>
      </div>
    </Link>
  );
};

export default NftCard;
