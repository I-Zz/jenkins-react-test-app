import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple React App for Jenkins Testing/i);
  expect(linkElement).toBeInTheDocument();
});
