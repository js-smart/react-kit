import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NextRouter } from 'next/router';

export function GoBackButton(props: { router: NextRouter }) {
  return (
    <Tooltip title="Go Back to Previous Page">
      <IconButton color="primary" onClick={() => props.router.back()}>
        <ArrowBackIosIcon />
      </IconButton>
    </Tooltip>
  );
}
