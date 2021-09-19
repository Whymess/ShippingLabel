import React from "react";
export default function Button(props) {
  let { name, onClick, disablePrevButton, disableContueButton } = props;

  let disable;
  if (name === "Continue") {
    disable = disableContueButton();
  }

  if (name === "Previous") {
    disable = disablePrevButton();
  }

  return (
    <button
      disabled={disable}
      type="button"
      name={name}
      onClick={onClick}
      className="btn btn-primary"
    >
      {name}
    </button>
  );
}
