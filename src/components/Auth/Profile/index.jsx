import { useState } from "react";
import BreadcrumbCom from "../../BreadcrumbCom";
import Layout from "../../Partials/Layout";
import IcoDashboard from "./icons/IcoDashboard";

export default function Profile() {
  const [switchDashboard, setSwitchDashboard] = useState(false);
  return (
    <Layout childrenClasses="pt-0 pb-0">
      {console.log("suvo")}
      <div className="profile-page-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full my-10">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "profile", path: "/profile" },
              ]}
            />
            <div className="w-full bg-white px-10 py-9">
              <div className="title-area w-full flex justify-between items-center">
                <h1 className="text-[22px] font-bold text-qblack">
                  Your Dashboard
                </h1>
                <div className="switch-dashboard flex space-x-3 items-center">
                  <p className="text-qgray text-base">Switch Dashboard</p>
                  <button
                    onClick={() => setSwitchDashboard(!switchDashboard)}
                    type="button"
                    className="w-[73px] h-[31px] border border-[#D9D9D9] rounded-full relative "
                  >
                    <div
                      className={`w-[23px] h-[23px] bg-qblack rounded-full absolute top-[3px] transition-all duration-300 ease-in-out ${
                        switchDashboard ? "left-[44px]" : "left-[4px]"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
              <div className="profile-wrapper w-full mt-8 flex space-x-10">
                <div className="w-[236px] min-h-[600px] border-r border-primarygray">
                  <div className="flex flex-col space-y-10">
                    <div className="item">
                      <a href="#">
                        <div className="flex space-x-3 items-center">
                          <span className="text-qgray">
                            <IcoDashboard />
                          </span>
                          <span className=" font-normal text-base text-qgray">
                            Dashbaord
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1">moin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
