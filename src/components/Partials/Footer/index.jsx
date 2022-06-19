import { Link } from "react-router-dom";
import Facebook from "../../Helpers/icons/Facebook";
import Instagram from "../../Helpers/icons/Instagram";
import Youtube from "../../Helpers/icons/Youtube";

export default function Footer() {
  return (
    <footer className="footer-section-wrapper bg-white">
      <div className="container-x block mx-auto pt-[83px]">
        <div className="flex justify-between mb-[95px]">
          <div className="w-4/10">
            {/* logo area */}
            <div className="mb-14">
              <img
                width="152"
                height="36"
                src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                alt="logo"
              />
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Delivery & Returns
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Warranty
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/10">
            <div className="mb-5">
              <h6 className="text-[18] font-500 text-[#2F2F2F]">About us</h6>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Rave’s Story
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Work With Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Coporate News
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Investors
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/10 ">
            <div className="mb-5">
              <h6 className="text-[18] font-500 text-[#2F2F2F]">Online Shop</h6>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Furniture
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Decoration
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Kitchen
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Interior
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/10">
            <div className="mb-5">
              <h6 className="text-[18] font-500 text-[#2F2F2F]">
                Useful Links
              </h6>
            </div>
            <div>
              <ul className="flex flex-col space-y-5 ">
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Secure Payment
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Terms of Use
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack">
                      Archived Products
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border h-[82px] flex justify-between items-center">
          <div className="flex space-x-5 items-center">
            <a href="#">
              <Instagram className="fill-current text-qgray hover:text-qblack" />
            </a>
            <a href="#">
              <Facebook className="fill-current text-qgray hover:text-qblack" />
            </a>
            <a href="#">
              <Youtube className="fill-current text-qgray hover:text-qblack" />
            </a>
            <span className="text-base text-qgray font-300">
              ©2022
              <a
                href="https://quomodosoft.com/"
                target="_blank"
                rel="noreferrer"
                className="font-500 text-qblack mx-1"
              >
                Quomodosoft
              </a>
              All rights reserved
            </span>
          </div>
          <a href="#">
            <img
              width="318"
              height="28"
              src={`${process.env.PUBLIC_URL}/assets/images/payment-getways.png`}
              alt="payment-getways"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
