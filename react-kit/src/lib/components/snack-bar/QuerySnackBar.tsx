import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton, Slide, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

interface QuerySnackBarProps {
  open: boolean;
  isPending?: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  autoHideDuration?: number;
}

/**
 * Reusable component to display snackbar based on React Query mutation state
 *
 * @param props QuerySnackBarProps
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.27
 */
export const QuerySnackBar = (props: QuerySnackBarProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open, props]);

  // Close button
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      {/* Success Alert */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open && props.isSuccess}
        autoHideDuration={props.autoHideDuration ?? 3000}
        onClose={() => setOpen(false)}
      >
        <Alert variant="filled" severity="success" sx={{ width: "100%" }} action={action}>
          {props.message}
        </Alert>
      </Snackbar>

      {/* Error Alert */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open && props.isError}
        TransitionComponent={Slide}
        autoHideDuration={props.autoHideDuration ?? 3000}
        onClose={() => setOpen(false)}
      >
        <Alert variant="filled" sx={{ width: "100%" }} severity="error" action={action}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};
