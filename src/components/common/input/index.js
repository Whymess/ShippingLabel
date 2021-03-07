import React from "react";

export default function Input(props) {
  let { onChange, label, value, type, className, checked } = props;
  if (type === "radio") {
    return (
      <input
        value={value}
        name={label}
        onChange={onChange}
        type={type}
        checked={checked}
        className={className}
      />
    );
  }
  return (
    <input
      value={value}
      name={label}
      onChange={onChange}
      type={type}
      className={className}
    />
  );
}
