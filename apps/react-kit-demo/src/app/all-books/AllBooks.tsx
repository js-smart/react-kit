import { Grid, Paper } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { Link } from 'react-router-dom';
import { BookService } from '../../services/BookService';
import { Book } from '../../types/Book';

export default function AllBooks() {
	const [data, setData] = React.useState<Book[]>([]);

	React.useEffect(() => {
		BookService.getAllBooks().then((response) => setData(response));
	}, []);

	return (
		<Grid container style={{ height: 'auto', width: '100%', textAlign: 'center' }}>
			<Grid item xs={12}>
				<h2>All Books</h2>

				<Paper elevation={24} style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
					<DataGrid
						initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
						getRowId={(row) => row.id}
						pageSizeOptions={[5, 10, 20, 50, 100]}
						disableRowSelectionOnClick={true}
						density={'comfortable'}
						rows={data ?? []}
						columns={columns}
						autoHeight={true}
					/>
				</Paper>
			</Grid>
		</Grid>
	);
}

/**
 * Table Columns
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
const columns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		flex: 1,
		renderCell: (params: GridCellParams) => <Link to={'/book/' + params.row['id']}>{params.row['id']}</Link>,
	},
	{ field: 'title', headerName: 'Title', flex: 2.5 },
	{ field: 'isbn', headerName: 'ISBN', flex: 2.5 },
	{ field: 'author', headerName: 'Author', flex: 2.5 },
];
