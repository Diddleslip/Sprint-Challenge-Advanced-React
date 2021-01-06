import React from "react";
import App from "../App";
import { render, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test("Test without crashing first", () => {
    render(<App />);
    // render(<PeopleCard />);
})

test("Is Alex Morgan html element visible?", () => {
    const { getByText } = render(<App />);
    // console.log(render(<App />).debug());
    const selectMorgan = getByText(/Alex Morgan/i);
    expect(selectMorgan).toBeVisible();
})

test("Is Popularity in the document?", () => {
    const { getByText } = render(<App />);
    // console.log(render(<App />).debug());
    const selectPopularity = getByText(/Popularity/i);
    expect(selectPopularity).toBeInTheDocument();
})

test("Is Hello html element visible?", () => {
    const { getByText } = render(<App />);
    // console.log(render(<App />).debug());
    const getHello = getByText(/Hello/i);
    expect(getHello).toBeVisible();
})

test("Is H1 a TestId?", () => {
    const { getByTestId } = render(<App />);
    // console.log(render(<App />).debug());
    const getHeader = getByTestId(/h1/i);
    expect(getHeader).toBeInTheDocument();
})