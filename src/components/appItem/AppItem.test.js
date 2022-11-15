import React from "react";
import AppItem from "./AppItem";

import { render, screen } from "@testing-library/react";

const app = {
  id: "9b565b11-7311-5b5e-a699-97873dffb361",
  name: "Voice Report",
  description: "Calls reporting and analytics of your calls.",
  categories: ["Voice Analytics", "Reporting", "Optimization"],
  subscriptions: [
    {
      name: "Trial",
      price: 0,
    },
    {
      name: "Professional",
      price: 3500,
    },
  ],
};

describe("AppItem", () => {
  test("renders AppItem component", () => {
    render(<AppItem app={app} />);
    screen.debug();
    expect(screen.getByTestId("app-item"));
  });
});
