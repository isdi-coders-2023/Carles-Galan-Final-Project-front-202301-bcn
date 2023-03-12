import Loader from "./Loader";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import { screen } from "@testing-library/react";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 'Back2Game SVG logo'", () => {
      renderWithProviders(<Loader />);

      const htmlExpectedTag = "loader";
      const back2gameLogo = screen.getByTestId(htmlExpectedTag);
      expect(back2gameLogo).toBeInTheDocument();
    });
  });
});
