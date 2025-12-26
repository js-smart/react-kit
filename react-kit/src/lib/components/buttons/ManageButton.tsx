import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";

interface ManageButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  className?: string;
  name?: string;
  dataCy?: string;
  startIcon?: React.ReactNode;
  onClick: () => void;
  children?: React.ReactNode;
}

export function ManageButton(props: ManageButtonProps) {
  return (
    <Button
      name={props.name}
      data-cy={props.dataCy ?? "manage-button"}
      className={props.className}
      onClick={() => props.onClick()}
      variant={props.variant ?? "contained"}
      color={props.color ?? "primary"}
      size={props.size ?? "large"}
      startIcon={props.startIcon ?? <SettingsIcon />}
    >
      {props.children ? props.children : "Manage"}
    </Button>
  );
}
