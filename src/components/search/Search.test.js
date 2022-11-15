import React from "react";
import Search from "./Search";
import { render, screen, fireEvent } from "@testing-library/react";
import * as reactRouter from "react-router";
import { createMemoryHistory } from "history";

describe("Test Search component", () => {
  test("renders Search component", async () => {
    const history = createMemoryHistory();
    render(
      <reactRouter.Router history={history}>
        <Search />
      </reactRouter.Router>
    );

    expect(screen.getByTestId("search-button"));
    expect(screen.getByTestId("search-input"));

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "App name" },
    });

    fireEvent.click(screen.getByTestId("search-button"));

    render(
      <reactRouter.Router history={history}>
        <Search />
      </reactRouter.Router>
    );

    expect(screen.getByTestId("clear-button"));

    fireEvent.click(screen.getByTestId("clear-button"));
    render(
      <reactRouter.Router history={history}>
        <Search />
      </reactRouter.Router>
    );
    expect(screen.getByTestId("clear-button")).toBeTruthy();
    screen.debug();
  });
});
