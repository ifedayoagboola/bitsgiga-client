import { useState } from "react";

export default function ProductView({ className }) {
  const productsImg = [
    {
      id: 1,
      src: "product-details-1.png",
    },
    {
      id: 2,
      src: "product-details-2.png",
    },
    {
      id: 3,
      src: "product-details-3.png",
    },
    {
      id: 4,
      src: "product-details-4.png",
    },
    {
      id: 6,
      src: "product-details-5.png",
    },
  ];

  const [src, setSrc] = useState(productsImg[0].src);
  const changeImgHandler = (current) => {
    setSrc(current);
  };

  return (
    <div
      className={`product-view w-full flex items-center justify-between ${
        className || ""
      }`}
    >
      <div className="w-1/2 mr-[70px]">
        <div className="w-full">
          <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${src}`}
              alt=""
              className="object-contain"
            />
            <div className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">
              <span>-50%</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {productsImg &&
              productsImg.length > 0 &&
              productsImg.map((img) => (
                <div
                  onClick={() => changeImgHandler(img.src)}
                  key={img.id}
                  className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/${img.src}`}
                    alt=""
                    className={`w-full h-full object-contain ${
                      src !== img.src ? "opacity-50" : ""
                    } `}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex-1 "></div>
    </div>
  );
}
