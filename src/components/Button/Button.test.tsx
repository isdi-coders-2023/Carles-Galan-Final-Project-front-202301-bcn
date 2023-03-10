import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it is rendered", () => {
    test("Then is should show a button with the text 'login'", () => {
      const textReceived = "login";

      renderWithProviders(<Button text={textReceived} />);

      const button = screen.getByRole("button", { name: textReceived });

      expect(button).toBeInTheDocument();
    });
  });
});
