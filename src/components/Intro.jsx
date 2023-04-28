import { useState } from "react";
import { SiAcademia } from "react-icons/si";
import { TEACHER_WALLET_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  const [ethLowPrice, setETHLowPrice] = useState(0);
  const [ethSaleRate, setETHSaleRate] = useState(0);
  const [usdcLowPrice, setUSDCLowPrice] = useState(0);
  const [usdcSaleRate, setUSDCSaleRate] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-t from-transparent to-red-300 pt-10 h-[400px]">
        <div className="flex relative mt-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-9xl truncate opacity-40 pointer-events-none">
            h 6 6 2
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
              <div className="text-4xl font-bold">DESIGN BY h662</div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex justify-center items-center text-black mt-1">
                <SiAcademia />
              </div>
            </div>
            <div className="flex gap-1 text-gray-400 mt-4 font-bold">
              <div>by</div>
              <div className="text-yellow-400">{TEACHER_WALLET_ADDRESS}</div>
              {/* <div className="text-yellow-400">{account}</div> */}
            </div>
            <div className="text-gray-400 font-bold text-md mt-1 w-[370px]">
              <div>개발자가 되고픈 자 강서구로 모여라</div>
              <div>콜라를 사서 김포공항으로 오시오</div>
              <div>모든걸 전수해드립니다</div>
              <div>h662가 미래다..!!</div>
            </div>
            <div className="flex gap-8 mt-8 text-xs text-gray-400 font-bold max-lg:hidden">
              <div>
                <div className="text-2xl text-white">{totalNft}</div>
                <div>총 NFT</div>
              </div>
              <div>
                <div className="text-2xl text-white">{mintedNft}</div>
                <div>발행한 NFT</div>
              </div>
              <div>
                <div className="text-2xl text-white">{myNft}</div>
                <div>내 NFT</div>
              </div>
              <div>
                <div className="text-2xl text-white">
                  {ethLowPrice === 0 ? "-" : ethLowPrice}
                </div>
                <div>ETH 최저가</div>
              </div>
              <div>
                <div className="text-2xl text-white">
                  {ethSaleRate === 0 ? "-" : ethSaleRate}
                </div>
                <div>ETH 총 판매량</div>
              </div>
              <div>
                <div className="text-2xl text-white">
                  {usdcLowPrice === 0 ? "-" : usdcLowPrice}
                </div>
                <div>USDC 최저가</div>
              </div>
              <div>
                <div className="text-2xl text-white">
                  {usdcSaleRate === 0 ? "-" : usdcSaleRate}
                </div>
                <div>USDC 총 판매량</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
