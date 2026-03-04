import { Button, Card, CardContent, Typography } from '@mui/material';
import { AppSnackBar, initializeState, markError, markSuccess, toast } from '@react-kit/*';
import { useState } from 'react';

export default function SnackBarDemo() {
	const [open, setOpen] = useState(false);
	const [progressState, setProgressState] = useState(initializeState());
	return (
		<div style={{ margin: '1rem', textAlign: 'center' }}>
			<Card sx={{ m: 3 }} elevation={16}>
				<CardContent>
					<Typography sx={{ mb: 5 }} variant="h5">
						Snack Bar Demo
					</Typography>

					<Button
						variant={'contained'}
						color={'primary'}
						sx={{ m: 1 }}
						onClick={() => {
							setProgressState(markSuccess(progressState, `Successfully shown success SnackBar!`));
							setOpen(true);
						}}>
						Show Success SnackBar
					</Button>

					<Button
						sx={{ m: 1 }}
						variant={'contained'}
						color={'error'}
						onClick={() => {
							setProgressState(markError(progressState, `Successfully shown error SnackBar!`));
							setOpen(true);
						}}>
						Show Error SnackBar
					</Button>
				</CardContent>
			</Card>

			<Card sx={{ m: 3 }} elevation={16}>
				<CardContent>
					<Typography sx={{ mb: 5 }} variant="h5">
						Toast Demo
					</Typography>

					<Button
						variant={'contained'}
						color={'warning'}
						sx={{ m: 1 }}
						onClick={() => {
							toast(`Successfully shown success toast!`, 'success');
						}}>
						Show Success Toast
					</Button>

					<Button
						variant={'contained'}
						color={'error'}
						sx={{ m: 1 }}
						onClick={() => {
							toast(`Successfully shown error toast!`, 'error');
						}}>
						Show Error Toast
					</Button>

					<Button
						variant={'contained'}
						color={'warning'}
						sx={{ m: 1 }}
						onClick={() => {
							toast(`Successfully shown warning toast!`, 'warning');
						}}>
						Show Warning Toast
					</Button>

					<Button
						variant={'contained'}
						color={'info'}
						sx={{ m: 1 }}
						onClick={() => {
							toast(`Successfully shown info toast!`, 'info');
						}}>
						Show Info Toast
					</Button>

					<Button
						variant={'contained'}
						sx={{ m: 1 }}
						onClick={() => {
							toast(`Successfully shown default toast!`);
						}}>
						Show Default Toast
					</Button>
				</CardContent>
			</Card>

			<AppSnackBar open={open} progressState={progressState} />
		</div>
	);
}
