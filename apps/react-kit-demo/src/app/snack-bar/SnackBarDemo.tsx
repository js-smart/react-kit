import React, { useState } from "react";
import { Button } from "@mui/material";
import { AppSnackBar, initializeState, markError, markSuccess } from "@react-kit/*";

export default function SnackBarDemo() {
  const [open, setOpen] = useState(false);
  const [progressState, setProgressState] = useState(initializeState());
  return (
    <div style={{ margin: "1rem", textAlign: "center" }}>
      <Button
        variant={"contained"}
        color={"primary"}
        sx={{ m: 1 }}
        onClick={() => {
          setProgressState(markSuccess(progressState, `Successfully shown success SnackBar!`));
          setOpen(true);
        }}
      >
        Show Success SnackBar
      </Button>

      <Button
        sx={{ m: 1 }}
        variant={"contained"}
        color={"error"}
        onClick={() => {
          setProgressState(markError(progressState, `Successfully shown error SnackBar!`));
          setOpen(true);
        }}
      >
        Show Error SnackBar
      </Button>

      <AppSnackBar open={open} progressState={progressState} />
    </div>
  );
}
