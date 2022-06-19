import Star from "../icons/Star";

export default function ProductCardStyleOne({ datas }) {
  console.table(datas);
  return (
    <div className="product-card-one w-full h-full bg-white">
      <div
        className="product-card-img w-full h-[300px]"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/images/${datas.image}) no-repeat center`,
        }}
      ></div>
      <div className="product-card-details px-[30px] pb-[30px]">
        <div className="reviews flex space-x-[1px] mb-3">
          {Array.from(Array(datas.review), () => (
            <span key={datas.review + Math.random()}>
              <Star />
            </span>
          ))}
        </div>
        <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2">
          {datas.title}
        </p>
        <p className="price">
          <span className="main-price text-qgray line-through font-600 text-[18px]">
            {datas.price}
          </span>
          <span className="offer-price text-qred font-600 text-[18px] ml-2">
            {datas.offer_price}
          </span>
        </p>
      </div>
    </div>
  );
}
