import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertColor, IconButton } from '@mui/material';
import { useState } from 'react';

/**
 * Dismissible Alert properties
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.17
 */
type DismissibleAlertProps = {
	message: string;
	severity: AlertColor;
	className?: string;
	dismissible?: boolean;
	dismissOnTimeOut?: boolean;
	dismissTimeOut?: number;
	ariaLabel?: string;
};

export function DismissibleAlert(props: Readonly<DismissibleAlertProps>) {
	const { ariaLabel, ...rest } = props;
	const [open, setOpen] = useState(true);
	const [dismissible] = useState(props.dismissible ?? true);
	const [dismissOnTimeOut] = useState(props.dismissOnTimeOut ?? true);
	const [dismissTimeOut] = useState<number>(props.dismissTimeOut ?? 5000);

	/**
	 * If `dismissOnTimeOut` is set then Dismiss the alert on time out
	 *
	 * @author Pavan Kumar Jadda
	 * @since 0.2.17
	 */
	setTimeout(() => {
		if (dismissOnTimeOut) {
			setOpen(false);
		} else {
			setOpen(open);
		}
	}, dismissTimeOut);

	return (
		<span>
			{open && (
				<Alert
					action={
						dismissible ? (
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setOpen(false);
								}}>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						) : null
					}
					style={{ margin: '20px' }}
					aria-label={ariaLabel ?? 'Dismissible Alert'}
					{...rest}>
					{rest.message}
				</Alert>
			)}
		</span>
	);
}
