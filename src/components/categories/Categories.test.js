import React from "react";
import Categories from "./Categories";
import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import * as categoryActions from "../../store/actions/categoryActions";

import { createMemoryHistory } from "history";
import * as reactRouter from "react-router";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockedCategories = [
  {
    id: 1,
    name: "Reporting",
    key: "reporting",
  },
  {
    id: 2,
    name: "Channels",
    key: "channels",
  },
  {
    id: 3,
    name: "Dialer",
    key: "dialer",
  },
  {
    id: 4,
    name: "Optimization",
    key: "optimization",
  },
  {
    id: 5,
    name: "Voice Analytics",
    key: "voice-analytics",
  },
];

const mockedDispatch = jest.fn();
describe("testing of Categories component", () => {
  const useSelectorSpy = jest.spyOn(reactRedux, "useSelector");
  const useDispatchSpy = jest.spyOn(reactRedux, "useDispatch");
  const getCategoriesSpy = jest.spyOn(categoryActions, "getCategories");
  const useLocationSpy = jest.spyOn(reactRouter, "useLocation");
  beforeEach(() => {
    useSelectorSpy.mockImplementation((selector) => selector(mockedCategories));
    useLocationSpy.mockImplementation(() => ({
      pathname: "/apps/",
      search: "",
    }));
  });
  afterEach(() => {
    useSelectorSpy.mockClear();
    useDispatchSpy.mockClear();
    useLocationSpy.mockClear();
    getCategoriesSpy.mockClear();
  });

  test("renders Categories component in step of loading", () => {
    const history = createMemoryHistory();
    useDispatchSpy.mockReturnValue(mockedDispatch);
    useSelectorSpy.mockImplementation((callback) =>
      callback({
        category: {
          loading: true,
          categories: [],
        },
      })
    );

    render(
      <reactRouter.Router history={history}>
        <Categories />
      </reactRouter.Router>
    );
    expect(screen.getByText("Loading..."));
  });

  test("renders Categories component in step of getCategories", () => {
    const history = createMemoryHistory();
    useDispatchSpy.mockReturnValue(mockedDispatch);
    useSelectorSpy.mockImplementation((callback) =>
      callback({
        category: {
          loading: false,
          categories: [...mockedCategories],
        },
      })
    );

    render(
      <reactRouter.Router history={history}>
        <Categories />
      </reactRouter.Router>
    );

    expect(mockedDispatch).toHaveBeenCalledWith(getCategoriesSpy());
    expect(screen.getByTestId("categories"));
    screen.debug();
  });
});
