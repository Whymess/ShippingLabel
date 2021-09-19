import React from "react";
import { Input } from "../common";
import "./index.scss";
import data from "../../data/";

export default function Options(props) {
  let { onChange, shippingOption } = props;
  return (
    <div>
      {data.shippingOptions.map((el, i) => {
        return (
          <li key={i + 1}>
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
    </div>
  );
}
