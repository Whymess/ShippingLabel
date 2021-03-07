import React from "react";
import { Input } from "../common";
export default function Weight(props) {
  let { value, onChange } = props;
  return (
    <div className="weight-contianer">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-4">Please enter a weight:</div>
          <div className="col-8">
            <Input onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
}
