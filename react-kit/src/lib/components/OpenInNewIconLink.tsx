import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Icon, Link as MuiLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  linkText: string;
  target: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

/**
 * Reusable component to open a link in new tab and show open new icon at the end
 *
 * @param props Properties of the component
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.24
 */
export function OpenInNewIconLink(props: Readonly<Props>) {
  return (
    <MuiLink
      component={Link}
      to={props.href}
      target={props.target || "_blank"}
      rel="noreferrer"
      className={"next-btn-link"}
      underline="hover"
      aria-label={props.ariaLabel ?? props.linkText ?? (typeof props.children === "string" ? props.children : undefined)}
    >
      {props.linkText ?? props.children}
      <Icon
        sx={{
          fontSize: "1.1rem",
          mx: 0.75,
          verticalAlign: "middle",
          display: "inline-flex",
        }}
        component={OpenInNewIcon}
      />
    </MuiLink>
  );
}
