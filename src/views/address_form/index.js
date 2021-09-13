import React from "react";
import { AddressSlot } from "..";

export default function Form(props) {
  let { onChange } = props;
  let { formState } = props;
  let { Name, Street, City, State, Zip } = formState;
  return (
    <div className="container">
      <div className="row mt-2">
        <AddressSlot value={Name} onChange={onChange} label="Name" />
      </div>
      <div className="row mt-2">
        <AddressSlot value={Street} onChange={onChange} label="Street" />
      </div>
      <div className="row mt-2">
        <AddressSlot value={City} onChange={onChange} label="City" />
        <AddressSlot value={State} onChange={onChange} label="State" />
        <AddressSlot value={Zip} onChange={onChange} label="Zip" />
      </div>
    </div>
  );
}
