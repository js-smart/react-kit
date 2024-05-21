import { CancelButton, DeleteButton, ExcelButton, LoadingSuccessButton, SuccessButton } from '@react-kit/react-kit';

export default function ButtonsDemo() {
	return (
		<div>
			Delete Button:
			<DeleteButton loading={false} onClick={() => console.log('Clicked Delete Button')} /> <br />
			<br />
			Cancel Button:
			<CancelButton onClick={() => console.log('Clicked Cancel Button')}>Cancel</CancelButton> <br />
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
		</div>
	);
}
