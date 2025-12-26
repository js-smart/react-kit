import { ConfirmDialog } from "@react-kit/ConfirmDialog";
import { useState } from "react";
import { Button } from "@mui/material";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ margin: "1rem", textAlign: "center" }}>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <ConfirmDialog
        id={"confirm-dialog"}
        keepMounted
        message={"Do you want to proceed?"}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        value={"Yes"}
      />
    </div>
  );
}
