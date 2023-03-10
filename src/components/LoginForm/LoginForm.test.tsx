import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Form from "./LoginForm";

describe("Given the LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field with a label 'username'", () => {
      const inputLabelText = "username";

      renderWithProviders(<Form />);

      const inputField = screen.getByLabelText(inputLabelText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'password'", () => {
      const inputLableText = "password";

      renderWithProviders(<Form />);

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });
  });
});
