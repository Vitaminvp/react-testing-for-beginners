import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Counter from "./Counter";
afterEach(cleanup);
test("<Counter />", () => {
  const wrapper = render(<Counter />);
  const { debug, getByTestId } = render(<Counter />);
  const counterButton = getByTestId("counter-button");
  wrapper.debug();
  console.log(wrapper.getByText("0").textContent);
  console.log(wrapper.getByText("0").tagName);
  expect(wrapper.getByText("0").tagName).toBe("BUTTON");
  // Asserts it is a button
  expect(wrapper.getByTestId("counter-button").tagName).toBe("BUTTON");
  expect(getByTestId("counter-button").tagName).toBe("BUTTON");
  // Asserts it starts at 0
  expect(wrapper.getByTestId("counter-button").textContent).toBe("0");
  expect(getByTestId("counter-button").textContent).toBe("0");
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("1");
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("2");
  wrapper.debug(); // outputs dom as string
});
