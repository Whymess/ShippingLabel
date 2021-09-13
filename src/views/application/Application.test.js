import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Application from "./index";

describe("Application", () => {
  test("should render application component", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Application />
      </Router>
    );
    expect(screen.getByText("Shipping label Maker")).toBeInTheDocument();
  });
});
