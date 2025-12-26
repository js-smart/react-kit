import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EditIconButton } from "../../lib/components/buttons/EditIconButton";
import jest from "jest-mock";

describe("EditIconButton", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders with the correct tooltip title", () => {
    render(<EditIconButton tooltipTitle="Edit Item" onClick={mockOnClick} />);
    expect(screen.getByLabelText("Edit Item")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<EditIconButton tooltipTitle="Edit Item" onClick={mockOnClick} />);
    fireEvent.click(screen.getByLabelText("Edit Item"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("uses the default color if none is provided", () => {
    render(<EditIconButton tooltipTitle="Edit Item" onClick={mockOnClick} />);
    expect(screen.getByLabelText("Edit Item")).toHaveClass("MuiIconButton-colorPrimary");
  });

  it("uses the provided color", () => {
    render(<EditIconButton tooltipTitle="Edit Item" onClick={mockOnClick} color="secondary" />);
    expect(screen.getByLabelText("Edit Item")).toHaveClass("MuiIconButton-colorSecondary");
  });
});
