export default function DiscountBanner({ className }) {
  return (
    <div
      className={`w-full h-[307px] bg-cover flex justify-center items-center ${
        className || ""
      }`}
      style={{
        background: `url(${process.env.PUBLIC_URL}/assets/images/discount-banner-1.jpg) no-repeat`,
      }}
    >
      <div>
        <div>
          <h1 className="text-3xl font-700 text-qblack mb-2 text-center">
            Get <span className="mx-1 text-qyellow">20%</span> Off Discount
            Coupon
          </h1>
          <p className="text-center text-[18px] font-400">
            by Subscribe our Newsletter
          </p>
        </div>
        <div className="w-[543px] h-[54px] flex mt-8">
          <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack">
            <span>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14H2C1.4 14 1 13.6 1 13V2C1 1.4 1.4 1 2 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14Z"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 4L8.5 8.5L14 4"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <button
            type="button"
            className="w-[158px] h-full bg-qyellow text-sm font-600"
          >
            Get the Coupon
          </button>
        </div>
      </div>
    </div>
  );
}
