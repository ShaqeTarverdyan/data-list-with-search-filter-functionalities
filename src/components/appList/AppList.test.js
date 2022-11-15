import React from "react";
import AppList from "./AppList";
import {render, screen} from "@testing-library/react";
import * as reactRedux from "react-redux";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

describe("AppsList", () => {
    const useSelectorSpy = jest.spyOn(reactRedux, "useSelector");
    beforeEach(() => {
        useSelectorSpy.mockImplementation((selector) => selector(mockedApps));
    });
    afterEach(() => {
        useSelectorSpy.mockClear();
    });

    const mockedApps = [
        {
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
        },
        {
            id: "470fedc5-489e-5acb-a200-c85adaa18356",
            name: "Power Dialer",
            description:
                "Auto dialer that will help increase your connect rates and talk time.",
            categories: ["Dialer", "Optimization"],
            subscriptions: [
                {
                    name: "Trial",
                    price: 0,
                },
                {
                    name: "Professional",
                    price: 4500,
                },
                {
                    name: "Premium",
                    price: 6000,
                },
            ],
        },
    ];

    test("renders AppList component in step of loading", () => {
        useSelectorSpy.mockImplementation((callback) =>
            callback({
                app: {
                    loading: true,
                    apps: [],
                },
            })
        );
        render(<AppList/>);

        expect(screen.getByText("Loading..."));
    });

    test("render AppList component in step of  empty data", () => {
        useSelectorSpy.mockImplementation((callback) =>
            callback({
                app: {
                    loading: false,
                    apps: [],
                },
            })
        );

        render(<AppList/>);
        const mockedEmptyPageText = "There is no any item with this key";
        expect(screen.getByText(mockedEmptyPageText));
    });

    test("renders AppList component in step of writing apps list", () => {
        useSelectorSpy.mockImplementation((callback) =>
            callback({
                app: {
                    loading: false,
                    apps: [...mockedApps],
                },
            })
        );

        render(<AppList/>);
        expect(screen.getAllByTestId("app-item"));
    });
});
