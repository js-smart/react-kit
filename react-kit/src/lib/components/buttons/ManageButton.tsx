import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import { NextRouter } from 'next/router';

interface ManageButtonProps {
  url: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  router: NextRouter;
}

export default function ManageButton(props: ManageButtonProps) {
  return (
    <Button
      className="pushRight"
      onClick={() => props.router.push(props.url)}
      variant="contained"
      color="primary"
      size={props.size ?? 'large'}
      startIcon={props.startIcon ?? <SettingsIcon />}
    >
      Manage
    </Button>
  );
}
