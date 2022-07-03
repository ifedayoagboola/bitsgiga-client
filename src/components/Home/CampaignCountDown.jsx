import { Link } from "react-router-dom";
import CountDown from "../Helpers/CountDown";

export default function CampaignCountDown({
  className,
  lastDate,
  counterbg,
  appscreen,
}) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(lastDate);

  return (
    <div>
      <div className={`w-full h-[460px] ${className || ""}`}>
        <div className="container-x mx-auto h-full">
          <div className="flex space-x-[30px] items-center h-full">
            <div
              data-aos="fade-right"
              className="campaign-countdown w-1/2 h-full"
              style={{
                background: `url(${process.env.PUBLIC_URL}/assets/images/campaign-cover-countdown.jpg) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Link to="/flash-sale">
                <div className="w-full px-12 py-12">
                  <div className="countdown-wrapper w-full flex justify-between mb-10">
                    <div className="countdown-item">
                      <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 text-[30px] text-[#EB5757]">
                          {showDate}
                        </span>
                      </div>
                      <p className="text-[18px] font-500 text-center leading-8">
                        Days
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 text-[30px] text-[#2F80ED]">
                          {showHour}
                        </span>
                      </div>
                      <p className="text-[18px] font-500 text-center leading-8">
                        Hours
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 text-[30px] text-[#219653]">
                          {showMinute}
                        </span>
                      </div>
                      <p className="text-[18px] font-500 text-center leading-8">
                        Minutes
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 text-[30px] text-[#EF5DA8]">
                          {showSecound}
                        </span>
                      </div>
                      <p className="text-[18px] font-500 text-center leading-8">
                        Seconds
                      </p>
                    </div>
                  </div>
                  <div className="countdown-title mb-4">
                    <h1 className="text-[44px] text-qblack font-600">
                      WOO! Flash Sale
                    </h1>
                  </div>
                  <div className="inline-flex space-x-2 items-center border-b border-qyellow">
                    <span className="text-sm font-600 tracking-wide leading-7">
                      Shop Now
                    </span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.08984"
                          y="0.636719"
                          width="6.94219"
                          height="1.54271"
                          transform="rotate(45 2.08984 0.636719)"
                          fill="#1D1D1D"
                        />
                        <rect
                          x="7"
                          y="5.54492"
                          width="6.94219"
                          height="1.54271"
                          transform="rotate(135 7 5.54492)"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              data-aos="fade-left"
              className="download-app flex-1 h-full px-12 py-12"
              style={{
                background: `url(${
                  counterbg ||
                  `${process.env.PUBLIC_URL}/assets/images/download-app-cover.png`
                }) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="get-app">
                  <p className="text-[13px] font-600 text-qblack mb-3">
                    MOBILE APP VERSION
                  </p>
                  <h1 className="text-[30px] font-600 text-qblack leading-10 mb-8">
                    Get Our
                    <span className="text-qred border-b-2 border-qred mx-2">
                      Mobile App
                    </span>
                    <br /> It’s Make easy for you life !
                  </h1>
                  <div className="flex space-x-5 items-center">
                    <div>
                      <a href="#">
                        <img
                          width="170"
                          height="69"
                          src={`${process.env.PUBLIC_URL}/assets/images/play-store.png`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <img
                          width="170"
                          height="69"
                          src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="app-screen">
                  <img
                    src={
                      appscreen ||
                      `${process.env.PUBLIC_URL}/assets/images/app-screen.png`
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
