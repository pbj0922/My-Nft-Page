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
        <div className="text-gray-200 flex items-center gap-2 border-r-[1px] border-gray-500 pr-8">
          <div>
            <SiAcademia size={40} />
          </div>
          <div>
            <div>ATTI</div>
            <div>COMPANY</div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm gap-1">
          <div>대표이사 박범진</div>
          <div>사업자 등록번호 01-2345-6789</div>
        </div>
        <div className="flex flex-col justify-center text-sm gap-1">
          <div>주소 경기도 김포시 고촌읍 어딘가</div>
          <div>이메일 qkrqjawls0922@likelion.org</div>
        </div>
      </div>
      <div className="text-gray-500 font-bold px-8 hidden lg:inline-block">
        <div className="flex justify-end gap-6 text-lg">
          <BsInstagram />
          <BsTwitter />
          <BsFacebook />
          <BsYoutube />
          <BsDiscord />
        </div>
        <div className="flex gap-2 text-xs mt-4">
          <div className="border-r-[1px] border-gray-500 px-2">이용약관</div>
          <div className="border-r-[1px] border-gray-500 pr-2">
            개인정보처리방침
          </div>
          <div>자주묻는질문</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
