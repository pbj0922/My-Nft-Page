import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { SiAcademia } from "react-icons/si";
import { AiOutlineReload } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import { CONTRACT_ADDRESS, TEACHER_WALLET_ADDRESS } from "../web3.config";

const Detail = () => {
  const [metadata, setMetadata] = useState();
  const [heartCount, setHeartCount] = useState(0);

  const { tokenId } = useParams();

  const onclickAddHeart = () => {
    setHeartCount(heartCount + 1);
  };

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  return (
    <div className="flex flex-col items-center pt-16 pb-24">
      {metadata ? (
        <>
          <div className="flex gap-16">
            <div className="max-w-[512px]">
              <img className="rounded-t-3xl" src={metadata.image} />
              <div className="py-8 bg-zinc-800 rounded-b-3xl">
                <div className="flex justify-between items-center px-8">
                  <div className="text-xl font-bold">판매중이 아님</div>
                  <div className="flex flex-col items-center">
                    <button onClick={onclickAddHeart}>
                      <AiOutlineHeart size={25} />
                    </button>
                    <div className="font-bold">{heartCount}</div>
                  </div>
                </div>
                <div className="flex justify-around items-center px-3 pt-8">
                  <button className="bg-zinc-700 w-52 h-[54px] rounded-lg hover:bg-zinc-500">
                    공유하기
                  </button>
                  <button className="bg-yellow-400 text-black w-52 h-[54px] rounded-lg">
                    제안하기
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[512px] flex flex-col pt-4 max-lg:hidden">
              <div className="flex justify-end text-3xl pr-4 gap-2">
                <button>
                  <AiOutlineReload />
                </button>
                <button>
                  <AiOutlineShareAlt />
                </button>
                <button>
                  <AiOutlineFullscreen />
                </button>
              </div>
              <div className="flex justify-start gap-1 font-bold text-2xl">
                <div className="text-gray-400">DESIGN BY h662</div>
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex justify-center items-center text-black mt-1">
                  <SiAcademia size={15} />
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold">{metadata.name}</div>
                <div className="text-gray-400 font-bold mt-4">
                  <div className="flex gap-1">
                    소유자
                    <div className="text-yellow-400">
                      {TEACHER_WALLET_ADDRESS.substring(0, 4)}...
                      {TEACHER_WALLET_ADDRESS.substring(
                        TEACHER_WALLET_ADDRESS.length - 4
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-gray-400 h-full mt-10 rounded-3xl p-7">
                <div className="flex items-center text-lg font-bold gap-2">
                  <RiNewspaperLine size={25} />
                  <div>거래 내역</div>
                </div>
                <div className="h-full flex justify-center items-center text-gray-400">
                  거래 내역이 없어요
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="w-[512px] max-lg:hidden">
              <div className="border-[1px] border-gray-400 h-full mt-10 rounded-3xl pt-7 px-7">
                <div className="flex items-center text-lg font-bold gap-2">
                  <AiOutlineProfile size={25} />
                  <div>상세 정보</div>
                </div>
                <div className="flex flex-col px-1 mt-4">
                  <div>
                    <div className="font-bold text-lg">크리에이터</div>
                    <div className="bg-zinc-800 w-[440px] h-28 rounded-lg flex text-xs font-bold gap-4 py-4 items-center mt-4 text-gray-300">
                      <div className="flex flex-col gap-5 pl-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-[90px]">컨트랙트 주소</div>
                          <div className="w-[90px] flex justify-end text-sm text-yellow-400">
                            {CONTRACT_ADDRESS.substring(0, 4)}...
                            {CONTRACT_ADDRESS.substring(
                              CONTRACT_ADDRESS.length - 4
                            )}
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div className="w-[110px]">크리에이터 수수료</div>
                          <div className="w-[70px] flex justify-end text-sm">
                            7.5%
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-4 items-center">
                          <div className="w-[90px]">크리에이터</div>
                          <div className="w-[90px] flex justify-end text-sm text-yellow-400">
                            {TEACHER_WALLET_ADDRESS.substring(0, 4)}...
                            {TEACHER_WALLET_ADDRESS.substring(
                              TEACHER_WALLET_ADDRESS.length - 4
                            )}
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div className="w-[90px]">거래소 수수료</div>
                          <div className="w-[90px] flex justify-end text-sm">
                            2.5%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mt-4">프로퍼티</div>
                    <div className="mt-4 text-gray-300">
                      <ul className="grid grid-cols-3 gap-8 py-8">
                        {metadata.attributes.map((v, i) => {
                          return (
                            <li
                              key={i}
                              className="bg-zinc-800 w-28 p-4 rounded-xl"
                            >
                              <div>{v.trait_type}</div>
                              <div className="mt-1 font-bold text-white">
                                {v.value}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[512px] max-lg:hidden">
              <div className="border-[1px] border-gray-400 h-full mt-10 rounded-3xl p-7">
                <div className="flex items-center text-lg font-bold gap-2">
                  <RiNewspaperLine size={25} />
                  <div>제안 현황</div>
                </div>
                <div className="h-full flex justify-center items-center text-gray-400">
                  받은 제안이 없어요
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
};

export default Detail;
