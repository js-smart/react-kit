import React from "react";
import { Button, SxProps, Theme } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const style = {
  backgroundColor: "$primary-color",
  color: "var(--white-color)",
  margin: "20px",
};

/**
 * Reusable Success Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.3
 */
interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  name?: string;
  loading: boolean;
  dataCy?: string;
  startIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

/**
 * Reusable Success Loading Button
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function LoadingSuccessButton(props: Props) {
  return (
    <Button
      name={props.name}
      data-cy={props.dataCy ?? "loading-success-button"}
      variant={props.variant ?? "contained"}
      color={props.color ?? "success"}
      loadingPosition={"start"}
      startIcon={props.startIcon ?? <SaveIcon />}
      loading={props.loading}
      type={props.type ?? "button"}
      style={style}
      sx={props.sx}
      onClick={props.onClick}
    >
      {props.children ?? props.name}
    </Button>
  );
}
