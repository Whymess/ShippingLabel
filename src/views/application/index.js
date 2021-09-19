import React, { useState, useEffect } from "react";
import "./index.scss";
import { Form, Weight, Options, Complete, FormActions } from "../../views";
import data from "../../data";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

export default function Application() {
  let [sender, setSender] = useState({
    Name: "",
    Street: "",
    City: "",
    State: "",
    Zip: "",
  });

  let [receiver, setReceiver] = useState({
    Name: "",
    Street: "",
    City: "",
    State: "",
    Zip: "",
  });
  let [weight, setWeight] = useState(0);

  let [shippingOption, setShippingOption] = useState({});

  let [paths] = useState([
    "/sender",
    "/receiver",
    "/weight",
    "/options",
    "/complete",
  ]);

  let [steps, setStep] = useState(0);

  const location = useLocation();

  const onChange = (e) => {
    let { value } = e.target;
    if (location.pathname === "/sender") {
      setSender({
        ...sender,
        [e.target.name]: value,
      });
    }

    if (location.pathname === "/receiver") {
      setReceiver({
        ...receiver,
        [e.target.name]: value,
      });
    }

    if (location.pathname === "/weight") {
      setWeight(value);
    }

    if (location.pathname === "/options") {
      setShippingOption({ [value]: true });
    }
  };

  const disablePrevButton = () => {
    return steps === 0;
  };

  const disableContueButton = () => {
    return steps === 4;
  };

  let history = useHistory();

  useEffect(() => {
    history.push(paths[steps]);
  }, [steps, history, paths]);

  const onClick = (e) => {
    let { name } = e.target;
    if (name === "Continue") {
      setStep((steps) => steps + 1);
    }
    if (name === "Previous") {
      setStep((steps) => steps - 1);
    }
  };

  return (
    <div className="application-container">
      <div className="form-wrapper">
        <div className="card">
          <div className="card-title mt-1">
            <h1 style={{ textAlign: "center" }}> {data.cardTitle}</h1>
          </div>
          <div className="card-action-wrapper p-4">
            <div className="card-body">
              {/* #Create seperate components in each path */}
              <Switch>
                <Route path="/sender">
                  <div className="card-action-title d-flex justify-content-center">
                    <h5> {data.cardActionSender} </h5>
                  </div>
                  <Form formState={sender} onChange={onChange} />
                </Route>
                <Route path="/receiver">
                  <div className="card-action-title d-flex justify-content-center">
                    <h5> {data.cardActionReceiver} </h5>
                  </div>
                  <Form formState={receiver} onChange={onChange} />
                </Route>
                <Route path="/weight">
                  <Weight onChange={onChange} value={weight} />
                </Route>
                <Route path="/options">
                  <Options
                    shippingOption={shippingOption}
                    onChange={onChange}
                  />
                </Route>
                <Route path="/complete">
                  <Complete
                    receiver={receiver}
                    sender={sender}
                    weight={weight}
                    shippingOption={shippingOption}
                  />
                </Route>
              </Switch>
            </div>
            <FormActions
              disableContueButton={disableContueButton}
              disablePrevButton={disablePrevButton}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
