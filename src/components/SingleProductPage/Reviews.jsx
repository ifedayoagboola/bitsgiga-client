import Star from "../Helpers/icons/Star";
import InputCom from "../Helpers/InputCom";
import StarRating from "../Helpers/StarRating";

export default function Reviews({
  rating,
  ratingHandler,
  name,
  nameHandler,
  email,
  emailHandler,
  phone,
  phoneHandler,
  message,
  messageHandler,
}) {
  return (
    <div className="review-wrapper w-full">
      <div className="w-full reviews mb-[60px]">
        {/* comments */}
        <div className="w-full comments mb-[60px]">
          <div className="comment-item bg-white px-10 py-[32px] mb-2.5">
            <div className="comment-author flex justify-between items-center mb-3">
              <div className="flex space-x-3 items-center">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-medium text-qblack">
                    Ridoy Rock
                  </p>
                  <p className="text-[13px] font-normal text-qgray">
                    London,UK
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <span className="text-[13px] font-normal text-qblack mt-1 inline-block">
                  (5.0)
                </span>
              </div>
            </div>
            <div className="comment mb-[30px]">
              <p className="text-[15px] text-qgray leading-7 text-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining
              </p>
            </div>
            {/* sub commnets */}
            <div className="sub-comment-item bg-white px-10 pt-[32px] border-t">
              <div className="comment-author  mb-3">
                <div className="flex space-x-3 items-center">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/comment-user-2.png`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[18px] font-medium text-qblack">
                      Willium Kingson
                    </p>
                    <p className="text-[13px] font-normal text-qgray">
                      London,UK
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment mb-[30px]">
                <p className="text-[15px] text-qgray leading-7 text-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="comment-item bg-white px-10 py-[32px]">
            <div className="comment-author flex justify-between items-center mb-3">
              <div className="flex space-x-3 items-center">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-medium text-qblack">
                    Ridoy Rock
                  </p>
                  <p className="text-[13px] font-normal text-qgray">
                    London,UK
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <span className="text-[13px] font-normal text-qblack mt-1 inline-block">
                  (5.0)
                </span>
              </div>
            </div>
            <div className="comment mb-[30px]">
              <p className="text-[15px] text-qgray leading-7 text-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the redi 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining
              </p>
            </div>
          </div>
        </div>
        {/* load comments */}
        <div className="w-full flex justify-center">
          <button
            type="button"
            className="black-btn w-[300px] h-[50px] text-sm font-semibold"
          >
            Load More
          </button>
        </div>
      </div>
      <div className="write-review w-full">
        <h1 className="text-2xl font-medium text-qblack mb-5">
          Write Your Reviews
        </h1>

        <div className="flex space-x-1 items-center mb-[30px]">
          <StarRating rating={rating} ratingHandler={ratingHandler} />
          <span className="text-qblack text-[15px] font-normal mt-1">
            (0.0)
          </span>
        </div>

        <div className="w-full review-form ">
          <div className="flex space-x-[30px] items-center mb-5">
            <div className="w-1/3 ">
              <InputCom
                label="name*"
                placeholder=""
                type="text"
                name="name"
                inputClasses="h-[50px]"
                value={name}
                inputHandler={nameHandler}
              />
            </div>
            <div className="w-1/3">
              <InputCom
                label="Email*"
                placeholder=""
                type="email"
                name="name"
                inputClasses="h-[50px]"
                value={email}
                inputHandler={emailHandler}
              />
            </div>
            <div className="w-1/3">
              <InputCom
                label="Phone Number*"
                placeholder=""
                type="text"
                name="name"
                inputClasses="h-[50px]"
                value={phone}
                inputHandler={phoneHandler}
              />
            </div>
          </div>
          <div className="w-full mb-[30px]">
            <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
              Message*
            </h6>
            <textarea
              value={message}
              onChange={messageHandler}
              name=""
              id=""
              cols="30"
              rows="3"
              className="w-full focus:ring-0 focus:outline-none p-6"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="black-btn w-[300px] h-[50px] text-sm font-semibold"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
