import React from "react";

export default function Complete(props) {
  let { receiver, sender, weight, shippingOption } = props;
  const formatShippingOption = () => {
    return Object.keys(shippingOption).length === 0
      ? "N/A"
      : Object.keys(shippingOption);
  };

  const format = (object) => {
    let { Name, Street, City, State, Zip } = object;
    return (
      <>
        <div>
          <b>Name: </b>
          {Name || "N/A"}
        </div>
        <div>
          <b>Street: </b>
          {Street || "N/A"}
        </div>
        <div>
          <b>City: </b>
          {City || "N/A"}
        </div>
        <div>
          <b>State: </b>
          {State || "N/A"}
        </div>
        <div>
          <b>Zip: </b>
          {Zip || "N/A"}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">From: {format(sender)}</div>
        <div className="col">To: {format(receiver)}</div>
        <div className="col">
          <b>Weight: </b>
          {weight}
        </div>
        <div className="col">
          <b>Selected shipping option: </b>
          {formatShippingOption()}
        </div>
      </div>
    </div>
  );
}
