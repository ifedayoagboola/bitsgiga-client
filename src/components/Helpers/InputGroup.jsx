import React from "react";

export default function InputGroup({
  label,
  type = "text",
  name,
  placeholder,
  icon,
  value,
  onChange,
  required = false,
  className = "",
}) {
  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <label className="form-label">
          {label} {required && <span className="text-danger"> *</span>}
        </label>
      )}
      <div className="input-group">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control border-end-0"
        />
        {icon && (
          <span className="input-group-text border-start-0">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
} 