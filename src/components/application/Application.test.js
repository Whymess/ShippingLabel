import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { Router } from "react-router-dom";

import Application from "./index";

describe("App", () => {
  test("renders App component", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Application />
      </Router>
    );
  });
});
