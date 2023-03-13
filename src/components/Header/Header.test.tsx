import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show the sentio's logo", () => {
      const expectedAriaLabelText = "logo";

      renderWithProviders(<Header />);

      const logoIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(logoIcon).toBeInTheDocument();
    });
  });

  test("Then it should show my list logo", () => {
    const expectedAriaLabelText = "my-list";

    renderWithProviders(<Header />);

    const myListIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(myListIcon).toBeInTheDocument();
  });

  test("Then it should show login logo", () => {
    const expectedAriaLabelText = "login";

    renderWithProviders(<Header />);

    const LoginIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(LoginIcon).toBeInTheDocument();
  });

  test("Then it should show logout logo", () => {
    const expectedAriaLabelText = "logout";

    renderWithProviders(<Header />);

    const LogoutIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(LogoutIcon).toBeInTheDocument();
  });

  test("Then it should show home logo", () => {
    const expectedAriaLabelText = "home";

    renderWithProviders(<Header />);

    const HomeIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(HomeIcon).toBeInTheDocument();
  });
});
