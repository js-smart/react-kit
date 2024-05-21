import React from 'react';
import { LoadingButton } from '@mui/lab';
import variables from '../../react-kit.module.scss';
import { SxProps, Theme } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const style = {
  backgroundColor: variables.successColor,
  color: variables.whiteColor,
  margin: '20px',
};

/**
 * Reusable Success Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.3
 */
interface Props {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  loading: boolean;
  startIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

/**
 * Reusable Success Loading Button
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export default function LoadingSuccessButton(props: Props) {
  return (
    <LoadingButton
      variant="contained"
      color="success"
      loadingPosition={'start'}
      startIcon={props.startIcon ?? <SaveIcon />}
      loading={props.loading}
      type={props.type ?? 'button'}
      style={style}
      sx={props.sx}
      onClick={props.onClick}
    >
      {props.children}
    </LoadingButton>
  );
}
