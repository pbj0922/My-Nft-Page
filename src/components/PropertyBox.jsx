import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const PropertyBox = ({ TraitType }) => {
  const [isAttributeBox, setIsAttributeBox] = useState(false);

  const OnClickAttributeBox = () => {
    setIsAttributeBox(!isAttributeBox);
  };

  useEffect(() => {
    console.log(TraitType);
  }, []);

  return (
    <>
      <li
        className={`bg-gray-800 rounded-2xl flex flex-col  ${
          isAttributeBox ? "h-[300px] pt-6" : "h-[72px] justify-evenly"
        }`}
      >
        <div className="px-5 gap-5">
          <div className="flex justify-between">
            <div>{TraitType}</div>
            <button onClick={OnClickAttributeBox}>
              {isAttributeBox ? <SlArrowUp /> : <SlArrowDown />}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default PropertyBox;
