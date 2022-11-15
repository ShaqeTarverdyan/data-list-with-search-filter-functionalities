import React from "react";
import NotFound from "./NotFound";

import { render } from "@testing-library/react";

const mockedText = "There is no any matched data";

describe("NotFound", () => {
  test("renders NotFound component", () => {
    render(<NotFound text={mockedText} />);
  });
});
