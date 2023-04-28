import { SiAcademia } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-black py-10">
      <div className="flex items-center font-bold text-gray-500 px-8 gap-8">
        <div className="text-gray-200 flex items-center gap-2 pr-8 lg:border-r-[1px] lg:border-gray-500">
          <div>
            <SiAcademia size={40} />
          </div>
          <div>
            <div>ATTI</div>
            <div>COMPANY</div>
          </div>
        </div>
        <div className="flex-col justify-center text-sm gap-1 hidden lg:inline-block">
          <div>대표이사 박범진</div>
          <div>사업자 등록번호 012-345-6789</div>
        </div>
        <div className="flex-col justify-center text-sm gap-1 hidden lg:inline-block">
          <div>주소 경기도 김포시 고촌읍 어딘가</div>
          <div>이메일 qkrqjawls0922@likelion.org</div>
        </div>
      </div>
      <div className="text-gray-500 font-bold px-8">
        <div className="flex justify-end gap-6 text-3xl lg:text-lg">
          <button>
            <BsInstagram />
          </button>
          <button>
            <BsTwitter />
          </button>
          <button>
            <BsFacebook />
          </button>
          <button>
            <BsYoutube />
          </button>
          <button>
            <BsDiscord />
          </button>
        </div>
        <div className="flex gap-2 text-xs mt-4">
          <button className="border-r-[1px] border-gray-500 px-3 hidden lg:inline-block">
            이용약관
          </button>
          <button className="border-r-[1px] border-gray-500 pr-3 hidden lg:inline-block">
            개인정보처리방침
          </button>
          <button className="hidden lg:inline-block">자주묻는질문</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
