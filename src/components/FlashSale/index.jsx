import products from "../../data/products.json";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import CountDown from "../Helpers/CountDown";
import DataIteration from "../Helpers/DataIteration";
import Layout from "../Partials/Layout";

export default function FlashSale() {
  const { showDate, showHour, showMinute, showSecound } =
    CountDown("2023-03-04 4:00:00");
  return (
    <Layout>
      <div className="flashsale-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full">
            <div
              style={{
                background: `url(${process.env.PUBLIC_URL}/assets/images/flash-sale-ads.png) no-repeat`,
                backgroundSize: "cover",
              }}
              data-aos="fade-right"
              className="flash-ad w-full h-[400px] flex justify-end items-center mb-10"
            >
              <div className="mr-[75px]">
                <div className="countdown-wrapper w-full flex space-x-6 justify-between">
                  <div className="countdown-item">
                    <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 text-[30px] text-[#EB5757]">
                        {showDate}
                      </span>
                    </div>
                    <p className="text-[18px] font-500 text-center leading-8 text-white">
                      Days
                    </p>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 text-[30px] text-[#2F80ED]">
                        {showHour}
                      </span>
                    </div>
                    <p className="text-[18px] font-500 text-center leading-8 text-white">
                      Hours
                    </p>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 text-[30px] text-[#219653]">
                        {showMinute}
                      </span>
                    </div>
                    <p className="text-[18px] font-500 text-center leading-8 text-white">
                      Minutes
                    </p>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 text-[30px] text-[#EF5DA8]">
                        {showSecound}
                      </span>
                    </div>
                    <p className="text-[18px] font-500 text-center leading-8 text-white">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="products grid grid-cols-4 gap-[30px]">
              <DataIteration
                datas={products.products.slice(0, 16)}
                startLength={0}
                endLength={16}
              >
                {({ datas }) => (
                  <div data-aos="fade-up" key={datas.id} className="item">
                    <ProductCardStyleOne datas={datas} />
                  </div>
                )}
              </DataIteration>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
