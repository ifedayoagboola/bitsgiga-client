import PropTypes from "prop-types";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}) {
  const baseClasses = "font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-transparent hover:outline hover:outline-2 hover:outline-offset-2";
  
  const variantClasses = {
    primary: "btn-login bg-primary text-white hover:bg-primary-hover hover:border-primary-hover hover:outline-primary focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-secondary-hover hover:border-secondary-hover hover:outline-secondary focus:ring-secondary",
    success: "bg-success text-white hover:bg-success-hover hover:border-success-hover hover:outline-success focus:ring-success",
    danger: "bg-danger text-white hover:bg-danger-hover hover:border-danger-hover hover:outline-danger focus:ring-danger",
    warning: "bg-warning text-white hover:bg-warning-hover hover:border-warning-hover hover:outline-warning focus:ring-warning",
    info: "bg-info text-white hover:bg-info-hover hover:border-info-hover hover:outline-info focus:ring-info",
    light: "bg-light text-gray-800 hover:bg-light-hover hover:border-light-hover hover:outline-light focus:ring-light",
    dark: "bg-dark text-white hover:bg-dark-hover hover:border-dark-hover hover:outline-dark focus:ring-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary hover:outline-primary focus:ring-primary",
  };
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  
  const widthClasses = fullWidth ? "w-full" : "";
  
  const disabledClasses = disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    disabledClasses,
    className
  ].filter(Boolean).join(" ");
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary", 
    "secondary", 
    "success", 
    "danger", 
    "warning", 
    "info", 
    "light", 
    "dark", 
    "outline"
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}; 