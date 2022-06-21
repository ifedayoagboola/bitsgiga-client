export default function ProductsAds() {
  return (
    <div className="w-full products-ads">
      <div className="container-x mx-auto">
        <div className="flex space-x-[30px] items-center w-full h-[295px] overflow-hidden">
          <div className="w-1/2 h-full">
            <a href="#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/ads-1.png`}
                alt=""
                className="w-full h-full"
              />
            </a>
          </div>
          <div className="flex-1 h-full">
            <a href="#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/ads-2.png`}
                alt=""
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
