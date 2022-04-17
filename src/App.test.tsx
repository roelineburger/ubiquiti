import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("App renders", () => {
    const { getByTestId } = render(<App />);

    let author = getByTestId("author");
    expect(author).toBeInTheDocument();
    let toolbar = getByTestId("toolbar");
    expect(toolbar).toBeInTheDocument();
    let searchIcon = getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeInTheDocument();
    fireEvent.change(inputBox, { target: { value: "air" } });
    const gridIcon = getByTestId("grid-icon");
    expect(gridIcon).toBeInTheDocument();
    fireEvent.click(gridIcon);
  });
});
