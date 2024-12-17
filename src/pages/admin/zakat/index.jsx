import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import DataTable from "react-data-table-component";

function AdminZakat() {
	const columns = [
		{
			name: "Title",
			selector: (row) => row.title,
		},
		{
			name: "Year",
			selector: (row) => row.year,
		},
	];

	const data = [
		{
			id: 1,
			title: "Beetlejuice",
			year: "1988",
		},
		{
			id: 2,
			title: "Ghostbusters",
			year: "1984",
		},
	];

	return (
		<Container sx={{ padding: "30px 50px" }}>
			<Typography variant='h5' color='white'>
				Transaksi Zakat
			</Typography>

			<DataTable columns={columns} data={data} />
		</Container>
	);
}

export default AdminZakat;
