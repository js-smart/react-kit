import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppSnackBar } from "../../lib/components/snack-bar/AppSnackBar";
import { ProgressState } from "../../lib/types/ProgressState";

describe("AppSnackBar", () => {
  const successState: ProgressState = {
    isSuccess: true,
    isError: false,
    message: "Success!",
    isLoading: false,
    isComplete: false,
  };
  const errorState: ProgressState = {
    isSuccess: false,
    isError: true,
    message: "Error!",
    isLoading: false,
    isComplete: false,
  };

  it("renders success alert when progressState is success", () => {
    render(<AppSnackBar open={true} progressState={successState} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Success!");
    expect(alert).toHaveClass("MuiAlert-filledSuccess");
  });

  it("renders error alert when progressState is error", () => {
    render(<AppSnackBar open={true} progressState={errorState} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Error!");
    expect(alert).toHaveClass("MuiAlert-filledError");
  });
  /*
    it('closes the snackbar when the close button is clicked', () => {
      render(<AppSnackBar open={true} progressState={successState} />);
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('auto hides the snackbar after the specified duration', () => {
      jest.useFakeTimers();
      render(<AppSnackBar open={true} progressState={successState} autoHideDuration={1000} />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
      jest.advanceTimersByTime(1000);
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      jest.useRealTimers();
    });*/
});
