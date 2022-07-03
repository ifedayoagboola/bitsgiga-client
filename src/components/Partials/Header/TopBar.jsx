import { Link } from "react-router-dom";
import Arrow from "../../Helpers/icons/Arrow";

export default function TopBar({ className }) {
  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Account
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/tracking-order">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns">
              <div className="flex space-x-6">
                <button type="button" className="flex space-x-1 items-center">
                  <span>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/country-logo-16x16.png`}
                      width="16"
                      height="16"
                      alt="country logo"
                      className="overflow-hidden rounded-full"
                    />
                  </span>
                  <span className="text-xs font-500 text-qblack">
                    United State
                  </span>
                  <Arrow className="fill-current qblack" />
                </button>
                <button type="button" className="flex space-x-1 items-center">
                  <span className="text-xs font-500 text-qblack">USD</span>
                  <Arrow className="fill-current qblack" />
                </button>
                <button type="button" className="flex space-x-1 items-center">
                  <span className="text-xs font-500 text-qblack">English</span>
                  <Arrow className="fill-current qblack" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
