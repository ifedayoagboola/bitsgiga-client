export default function ProductsAds({
  className,
  ads = ["", ""],
  sectionHeight = "295px",
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          style={{ height: sectionHeight }}
          className={`${
            ads.length > 1 && ads.length <= 2 ? "flex space-x-[30px]" : ""
          } items-center w-full overflow-hidden`}
        >
          <div
            className={`h-full ${
              ads.length > 1 && ads.length <= 2 ? "w-1/2 " : "w-full"
            }  `}
          >
            <a href="#">
              <img src={ads[0]} alt="" className="w-full h-full" />
            </a>
          </div>
          {ads.length > 1 && ads.length <= 2 && (
            <div className="flex-1 h-full">
              <a href="#">
                <img src={ads[1]} alt="" className="w-full h-full" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
