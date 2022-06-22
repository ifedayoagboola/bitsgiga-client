import { useState } from "react";
import Cart from "../../Cart";
import Compair from "../../Helpers/icons/Compair";
import ThinBag from "../../Helpers/icons/ThinBag";
import ThinLove from "../../Helpers/icons/ThinLove";
import ThinPeople from "../../Helpers/icons/ThinPeople";
import SearchBox from "../../Helpers/SearchBox";

export default function Middlebar({ className }) {
  const [toggleCart, setToggle] = useState(false);
  const cartHandler = () => {
    setToggle(!toggleCart);
  };
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <img
                width="152"
                height="36"
                src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                alt="logo"
              />
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                <button type="button">
                  <span>
                    <Compair />
                  </span>
                </button>
                <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  2
                </span>
              </div>
              <div className="favorite relative">
                <button type="button">
                  <span>
                    <ThinLove />
                  </span>
                </button>
                <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  1
                </span>
              </div>
              <div className="cart relative cursor-pointer">
                <button onClick={cartHandler} type="button">
                  <span>
                    <ThinBag />
                  </span>
                </button>
                <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  15
                </span>
              </div>
              <div>
                <button type="button">
                  <span>
                    <ThinPeople />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {toggleCart && (
            <>
              <div
                onClick={cartHandler}
                className="fixed left-0 top-0 w-full h-full z-40"
              ></div>
              <Cart className="absolute right-0 top-16 z-50" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
