import { SiAcademia } from "react-icons/si";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ account }) => {
  return (
    <div className="bg-gradient-to-t from-transparent to-red-300 pt-10">
      <div className="flex items-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-9xl truncate opacity-40 pointer-events-none">
          A T T I
        </div>
        <div className="relative px-10">
          <img
            className="absolute w-44 h-44 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-44 h-44 rounded-full bg-white text-gray-950 flex justify-center items-center">
            loading...
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold">DESIGN BY ATTI</div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex justify-center items-center text-black mt-1">
              <SiAcademia />
            </div>
          </div>
          <div className="flex gap-1 text-gray-300 mt-4">
            <div>by</div>
            <div className="text-yellow-400">{account}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
