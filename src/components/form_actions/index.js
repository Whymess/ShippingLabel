import React from "react";
import { Button } from "../common/index";
export default function FormActions(props) {
  let { onClick, disablePrevButton, disableContueButton } = props;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          <Button
            disableContueButton={disableContueButton}
            disablePrevButton={disablePrevButton}
            onClick={onClick}
            name="Previous"
          />
        </div>
        <div className="col-2">
          <Button
            onClick={onClick}
            disableContueButton={disableContueButton}
            disablePrevButton={disablePrevButton}
            name="Continue"
          />
        </div>
      </div>
    </div>
  );
}
