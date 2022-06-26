import { useState } from "react";
import BreadcrumbCom from "../BreadcrumbCom";
import Layout from "../Partials/Layout";
import ProductView from "./ProductView";

export default function SingleProductPage() {
  const [tab, setTab] = useState("review");
  return (
    <>
      <Layout childrenClasses="pt-0">
        <div className="single-product-wrapper w-full ">
          <div className="bg-white pt-[30px] w-full">
            <div className="breadcrumb-wrapper w-full ">
              <div className="container-x mx-auto">
                <BreadcrumbCom
                  paths={[
                    { name: "home", path: "/" },
                    { name: "single product", path: "/single-product" },
                  ]}
                />
              </div>
            </div>
            <div className="w-full bg-white pb-[60px]">
              <div className="container-x mx-auto">
                <ProductView />
              </div>
            </div>
          </div>

          <div className="w-full relative pb-[60px]">
            <div className="tab-buttons w-full mb-10">
              <div className="container-x mx-auto">
                <ul className="flex space-x-12 ">
                  <li>
                    <span
                      onClick={() => setTab("des")}
                      className={`py-[15px] text-[15px] block border-b font-medium cursor-pointer ${
                        tab === "des"
                          ? "border-qyellow text-qblack "
                          : "border-transparent text-qgray"
                      }`}
                    >
                      Description
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setTab("review")}
                      className={`py-[15px] text-[15px] block border-b font-medium cursor-pointer ${
                        tab === "review"
                          ? "border-qyellow text-qblack "
                          : "border-transparent text-qgray"
                      }`}
                    >
                      Reviews
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => setTab("info")}
                      className={`py-[15px] text-[15px] block border-b font-medium cursor-pointer ${
                        tab === "info"
                          ? "border-qyellow text-qblack "
                          : "border-transparent text-qgray"
                      }`}
                    >
                      Seller Info
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 top-[52px] -z-10"></div>
            </div>
            <div className="tab-contents w-full min-h-[400px] ">
              <div className="container-x mx-auto">
                {tab === "des" && (
                  <div data-aos="fade-up" className="w-full tab-content-item">
                    <h6 className="text-[18px] font-medium text-qblack mb-2">
                      Introduction
                    </h6>
                    <p className="text-[15px] text-qgray text-normal mb-10">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries but also the on leap into electronic
                      typesetting, remaining essentially unchanged. It wasn’t
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, andei more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum to make a type
                      specimen book.
                    </p>
                    <div>
                      <h6 className="text-[18px] text-medium mb-4">
                        Features :
                      </h6>
                      <ul className="list-disc ml-[15px]">
                        <li className="font-normal text-qgray leading-9">
                          slim body with metal cover
                        </li>
                        <li className="font-normal text-qgray leading-9">
                          latest Intel Core i5-1135G7 processor (4 cores / 8
                          threads)
                        </li>
                        <li className="font-normal text-qgray leading-9">
                          8GB DDR4 RAM and fast 512GB PCIe SSD
                        </li>
                        <li className="font-normal text-qgray leading-9">
                          NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                          keyboard, touchpad with gesture support
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {tab === "review" && (
                  <div data-aos="fade-up" className="w-full tab-content-item">
                    <h6 className="text-[18px] font-medium text-qblack mb-2">
                      Reviews
                    </h6>
                    {/* review-comments */}
                    <div className="w-full "></div>
                  </div>
                )}
                {tab === "info" && (
                  <div data-aos="fade-up" className="w-full tab-content-item">
                    info
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
