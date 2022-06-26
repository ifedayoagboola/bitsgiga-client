export default function InputCom({
  label,
  type,
  name,
  placeholder,
  //   iconName,
  inputHandler,
  value,
  inputClasses,
}) {
  return (
    <div className="input-com">
      {label && (
        <label
          className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 "
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="input-wrapper border border-qgray-border w-full overflow-hidden relative ">
        <input
          placeholder={placeholder}
          value={value}
          onChange={inputHandler}
          className={`input-field placeholder:text-base text-bese px-6 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none ${
            inputClasses || ""
          }`}
          type={type}
          id={name}
        />
        {/* {iconName && (
          <div className="absolute right-6 bottom-[19px] z-10">
            <Icons name={iconName} />
          </div>
        )} */}
      </div>
    </div>
  );
}
