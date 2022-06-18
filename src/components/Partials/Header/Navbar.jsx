import { Link } from "react-router-dom";
import Arrow from "../../Helpers/icons/Arrow";

export default function Navbar({ className }) {
  return (
    <div className={`w-full bg-qyellow h-[60px] ${className || ""}`}>
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full flex justify-between items-center">
          <div className="category-and-nav flex space-x-7 items-center">
            <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px]">
              <button
                type="button"
                className="w-full h-full flex justify-between items-center"
              >
                <div className="flex space-x-3 items-center">
                  <span>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="14" height="1" fill="#1D1D1D" />
                      <rect y="8" width="14" height="1" fill="#1D1D1D" />
                      <rect y="4" width="10" height="1" fill="#1D1D1D" />
                    </svg>
                  </span>
                  <span className="text-sm font-600 text-qblacktext">
                    All Categories
                  </span>
                </div>
                <div>
                  <Arrow
                    width="5.78538"
                    height="1.28564"
                    className="fill-current text-qblacktext"
                  />
                </div>
              </button>
            </div>
            <div className="nav">
              <ul className="flex space-x-10">
                <li>
                  <span className="flex items-center text-sm text-qblacktext font-600 cursor-pointer">
                    <span>Homepage</span>
                    <span className="ml-1.5 ">
                      <Arrow className="fill-current" />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center text-sm text-qblacktext font-600 cursor-pointer">
                    <span>Shop</span>
                    <span className="ml-1.5 ">
                      <Arrow className="fill-current" />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center text-sm text-qblacktext font-600 cursor-pointer">
                    <span>Pages</span>
                    <span className="ml-1.5 ">
                      <Arrow className="fill-current" />
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center text-sm text-qblacktext font-600 cursor-pointer">
                    <span>About</span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center text-sm text-qblacktext font-600 cursor-pointer">
                    <span>Contact</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="become-seller-btn">
            <Link to="/">
              <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <span className="text-sm font-600">Become a Seller</span>
                  <span>
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.08984"
                        width="6.94106"
                        height="1.54246"
                        transform="rotate(45 1.08984 0)"
                        fill="white"
                      />
                      <rect
                        x="6"
                        y="4.9082"
                        width="6.94106"
                        height="1.54246"
                        transform="rotate(135 6 4.9082)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
