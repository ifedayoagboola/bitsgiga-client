import Compair from "../../Helpers/icons/Compair";
import ThinBag from "../../Helpers/icons/ThinBag";
import ThinLove from "../../Helpers/icons/ThinLove";
import ThinPeople from "../../Helpers/icons/ThinPeople";
import SearchBox from "../../Helpers/SearchBox";

export default function Middlebar({ className }) {
  return (
    <div className={`w-full h-[86px] ${className}`}>
      <div className="container-x mx-auto h-full">
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
              <span className="w-[14px] h-[14px] rounded-full bg-qyellow absolute -top-1 -right-2 flex justify-center items-center text-[9px]">
                1
              </span>
            </div>
            <div className="favorite relative">
              <button type="button">
                <span>
                  <ThinLove />
                </span>
              </button>
              <span className="w-[14px] h-[14px] rounded-full bg-qyellow absolute -top-1 -right-2 flex justify-center items-center text-[9px]">
                1
              </span>
            </div>
            <div className="cart relative">
              <button type="button">
                <span>
                  <ThinBag />
                </span>
              </button>
              <span className="w-[14px] h-[14px] rounded-full bg-qyellow absolute -top-1 -right-2 flex justify-center items-center text-[9px]">
                1
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
      </div>
    </div>
  );
}
