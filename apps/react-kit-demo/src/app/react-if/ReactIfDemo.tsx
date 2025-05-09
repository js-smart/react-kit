import React, { useState } from 'react';
import { DismissibleAlert, ManageButton, ReactIf } from '@react-kit/react-kit';
import { Card, Divider } from '@mui/material';

export default function ReactIfDemo() {
	const [show, setShow] = useState(true);

	return (
		<div style={{ textAlign: 'center' }}>
			<h2>React If Demo</h2>

			<Divider sx={{ mb: 3 }} />
			<ManageButton startIcon={''} onClick={() => setShow((prev) => !prev)}>
				Click to toggle
			</ManageButton>

			<Card sx={{ m: 5, mb: 5 }} elevation={24}>
				{/* Section 1: ReactIf with only condition */}
				<div style={{ marginTop: 32 }}>
					<h3>
						1. ReactIf with <code>condition</code> only
					</h3>
					<ReactIf condition={show}>
						<DismissibleAlert message={'Main content (condition is true)'} severity={'success'} dismissOnTimeOut={false} />
					</ReactIf>
				</div>
			</Card>

			<Card sx={{ m: 3 }} elevation={24}>
				{/* Section 2: ReactIf with condition and else */}
				<div style={{ marginTop: 32 }}>
					<h3>
						2. ReactIf with <code>condition</code> and <code>else</code>
					</h3>
					<ReactIf
						condition={show}
						else={<DismissibleAlert message={'Else content (condition is false)'} severity={'warning'} dismissOnTimeOut={false} />}>
						<DismissibleAlert message={'Main content (condition is true)'} severity={'success'} dismissOnTimeOut={false} />
					</ReactIf>
				</div>
			</Card>
		</div>
	);
}
