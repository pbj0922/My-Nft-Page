import { useEffect, useState } from "react";
import axios from "axios";
import { SiAcademia } from "react-icons/si";
import { BiWallet } from "react-icons/bi";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="flex justify-between">
      <div className="flex items-center font-bold">
        <div className="flex items-center text-yellow-400 p-4 ml-2">
          <SiAcademia size={27} />
          <div className="ml-2 text-2xl hidden md:inline-block">ATTI-BCS</div>
        </div>
        <div className="bg-black h-16 w-96 border-x-[1px] border-gray-500 ml-6 hidden lg:inline-block">
          <form className="w-full h-full">
            <input
              className="h-full pl-4 w-full bg-black text-white text-md focus:outline-none"
              type="text"
              placeholder="🔍 원하는 컬렉션 또는 아이템을 검색해주세요."
            />
          </form>
        </div>
        <div className="text-lg ml-6 text-gray-500 hidden md:inline-block">
          Originals
        </div>
        <div className="text-lg ml-6 text-gray-500 hidden md:inline-block">
          Collections
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-lg mr-6 text-gray-500 font-bold">FAQ</div>
        <div className="text-lg mr-6 text-gray-500">KRW</div>
        {account ? (
          <div className="mr-6 py-2 px-4 bg-zinc-800 text-yellow-400 font-bold rounded-full flex justify-center items-center">
            {account.substring(0, 4)}...
            {account.substring(account.length - 4)}
          </div>
        ) : (
          <button
            onClick={onClickAccount}
            className="p-2 mr-6 bg-zinc-800 rounded-full ml-1 text-white flex items-center font-bold"
          >
            <div className="mr-2 h-6 w-6 bg-yellow-400 text-black rounded-full flex justify-center items-center">
              <BiWallet size={17} />
            </div>
            Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;