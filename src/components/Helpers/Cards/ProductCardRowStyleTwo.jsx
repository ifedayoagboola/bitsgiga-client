import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";

export default function ProductCardRowStyleTwo({ className, datas }) {
  return (
    <div
      className={`product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="flex space-x-5 items-center w-full h-full p-[30px]">
        <div className="w-1/2 h-full">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${datas.image}`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center h-full">
          <div>
            {/* reviews */}
            <div className="flex space-x-1 mb-3">
              {Array.from(Array(datas.review), () => (
                <span key={datas.review + Math.random()}>
                  <Star />
                </span>
              ))}
            </div>
            <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2">
              {datas.title}
            </p>
            <p className="price mb-[26px]">
              <span className="main-price text-qgray line-through font-600 text-[18px]">
                {datas.price}
              </span>
              <span className="offer-price text-qred font-600 text-[18px] ml-2">
                {datas.offer_price}
              </span>
            </p>
            <button type="button" className="w-[110px] h-[30px]">
              <span className="yellow-btn"> Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
      {/* quick-access-btns */}
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <QuickViewIco />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <ThinLove />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <Compair />
          </span>
        </a>
      </div>
    </div>
  );
}
