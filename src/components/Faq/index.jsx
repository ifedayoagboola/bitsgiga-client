import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function Faq() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="faq-page-wrapper w-full mb-10">
        <div className="page-title w-full">
          <PageTitle
            title="Frequently Asked Questions"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]}
          />
        </div>
      </div>
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full flex space-x-[30px]">
            <div className="w-1/2"></div>
            <div className="flex-1 bg-white p-10">
              <div className="title flex flex-col items-center">
                <h1 className="text-[34px] font-bold text-qblack">
                  Have Any Qustion
                </h1>
                <span className="-mt-5 block">
                  <svg
                    width="354"
                    height="30"
                    viewBox="0 0 354 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                      stroke="#FFBB38"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="inputs mt-5">
                <div className="mb-4">
                  <InputCom
                    label="Frist Name*"
                    placeholder="Demo Name"
                    name="first_name"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Email Address*"
                    placeholder="info@quomodosoft.com"
                    name="email"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Subject*"
                    placeholder="Your Subject here"
                    name="subject"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-5">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Message*
                  </h6>
                  <textarea
                    placeholder="Type your message here"
                    className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"
                  ></textarea>
                </div>
                <div>
                  <a href="#">
                    <div className="black-btn text-sm font-semibold w-full h-[50px] flex justify-center items-center">
                      <span>Send Now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
