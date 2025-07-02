import { Link } from "react-router-dom";

export default function SocialLoginButton({
  provider,
  iconSrc,
  altText,
  href = "#",
  className = "",
}) {
  const getButtonClass = () => {
    switch (provider) {
      case "facebook":
        return "btn btn-info";
      case "google":
        return "btn btn-white border";
      case "apple":
        return "btn btn-dark bg-dark";
      default:
        return "btn btn-white border";
    }
  };

  return (
    <div className="text-center me-2 flex-fill">
      <Link
        to={href}
        className={`br-10 p-2 ${getButtonClass()} d-flex align-items-center justify-content-center ${className}`}
      >
        <img
          className="img-fluid m-1"
          src={iconSrc}
          alt={altText}
        />
      </Link>
    </div>
  );
} 