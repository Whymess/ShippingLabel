import React from "react";
import { Input } from "../common";
import "./index.scss";
export default function AddressSlot(props) {
  let { label, onChange, value } = props;
  return (
    <>
      <div className="col-2 card-body-form-label">
        <label>{label}:</label>
      </div>
      <div className="col">
        <Input
          className="form-control"
          type="text"
          value={value}
          onChange={onChange}
          label={label}
        />
      </div>
    </>
  );
}
