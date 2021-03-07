import React from "react";
import { Input } from "../common";
import "./index.scss";
import { default as data } from "../../data/";
export default function Options(props) {
  let { onChange, shippingOption } = props;
  return (
    <>
      {data.shippingOptions.map((el, i) => {
        return (
          <li key={i}>
            <Input
              onChange={onChange}
              type="radio"
              checked={shippingOption[el]}
              label="shippingOption"
              value={el}
              className="form-check-input"
            />
            <span> {el} </span>
          </li>
        );
      })}
    </>
  );
}
