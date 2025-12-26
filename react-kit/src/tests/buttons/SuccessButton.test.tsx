import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SuccessButton } from "../../lib/components/buttons/SuccessButton";
import jest from "jest-mock";

describe("SuccessButton", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders with the correct default properties", () => {
    render(<SuccessButton onClick={mockOnClick}>Success</SuccessButton>);
    const button = screen.getByRole("button", { name: "Success" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-containedSuccess");
  });

  it("calls onClick when clicked", () => {
    render(<SuccessButton onClick={mockOnClick}>Success</SuccessButton>);
    fireEvent.click(screen.getByRole("button", { name: "Success" }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with custom properties", () => {
    render(
      <SuccessButton
        onClick={mockOnClick}
        name="custom-name"
        dataCy="custom-data-cy"
        variant="outlined"
        color="secondary"
        startIcon={<span data-testid="custom-icon" />}
      >
        Custom Success
      </SuccessButton>,
    );
    const button = screen.getByRole("button", { name: "Custom Success" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-outlinedSecondary");
    expect(button).toHaveAttribute("name", "custom-name");
    expect(button).toHaveAttribute("data-cy", "custom-data-cy");
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });
});
