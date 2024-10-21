import {
	CancelButton,
	DeleteButton,
	ExcelButton,
	GoBackButton,
	HistoryButton,
	LoadingSuccessButton,
	ManageButton,
	SuccessButton,
} from '@react-kit/react-kit';
import { useNavigate } from 'react-router-dom';

export default function ButtonsDemo() {
	const navigate = useNavigate();
	return (
		<div style={{ marginInline: '1rem', textAlign: 'center' }}>
			Cancel Button:
			<CancelButton onClick={() => console.log('Clicked Cancel Button')} name={'Cancel'}></CancelButton> <br />
			Delete Button:
			<DeleteButton loading={false} onClick={() => console.log('Clicked Delete Button')} /> <br />
			<br />
			<br />
			Excel Button:
			<ExcelButton onClick={() => console.log('Clicked Excel Button')}>Export to Excel</ExcelButton> <br />
			<br />
			<div>
				Success Button:
				<SuccessButton onClick={() => console.log('Clicked Success Button')}>Success</SuccessButton> <br />
				<br />
			</div>
			<div>
				Loading Success Button:
				<LoadingSuccessButton loading={false} onClick={() => console.log('Clicked Loading Success Button')}>
					Save
				</LoadingSuccessButton>
				<br />
			</div>
			<div>
				Go back Button:
				<GoBackButton navigate={navigate}></GoBackButton>
				<br />
			</div>
			<div>
				History Button:
				<HistoryButton onClick={() => console.log('Clicked History Button')}>History</HistoryButton>
				<br />
			</div>
			<div>
				Manage Button:
				<ManageButton onClick={() => console.log('Clicked Manage Button')}>Manage</ManageButton>
				<br />
			</div>
		</div>
	);
}
