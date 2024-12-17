import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Button,
	Container,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText,
	Dialog,
	DialogContent,
	DialogTitle,
	CardMedia,
	CardContent,
	Card,
} from "@mui/material";

const Zakat = () => {
	const [zakatList, setZakatList] = useState([]); // Zakat data list
	const [selectedZakat, setSelectedZakat] = useState(null); // Selected zakat details
	const [isDetailsOpen, setIsDetailsOpen] = useState(false); // Control dialog open/close

	// Fetch all Zakat records
	const fetchZakat = async () => {
		try {
			const response = await axios.get("http://127.0.0.1:8000//zakat/");
			setZakatList(response.data);
		} catch (error) {
			console.error("Error fetching zakat data:", error);
		}
	};

	// Accept a zakat entry
	const handleAccept = async (id) => {
		try {
			await axios.patch(`http://127.0.0.1:8000//zakat/${id}/`, {
				is_accepted: true,
			});
			fetchZakat();
		} catch (error) {
			console.error("Error accepting zakat:", error);
		}
	};

	// Delete a zakat entry
	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://127.0.0.1:8000//zakat/${id}/`);
			alert("Zakat entry deleted successfully.");
			fetchZakat();
		} catch (error) {
			console.error("Error deleting zakat:", error);
		}
	};

	// View Zakat Details
	const handleViewDetails = (zakat) => {
		setSelectedZakat(zakat);
		setIsDetailsOpen(true);
	};

	// Close Dialog
	const handleCloseDetails = () => {
		setIsDetailsOpen(false);
		setSelectedZakat(null);
	};

	useEffect(() => {
		fetchZakat();
	}, []);

	return (
		<Container component={Paper} sx={{ padding: 4 }}>
			<Typography variant="h4" mb={4}>
				Zakat Management
			</Typography>

			{/* Zakat List */}
			<List>
				{zakatList.map((zakat) => (
					<ListItem key={zakat.id_zakat} divider>
						<ListItemText
							primary={`${zakat.nama_mz} - Rp ${zakat.nominal}`}
							secondary={`Tanggal Zakat: ${zakat.tgl_Zakat}`}
						/>
						<Button
							variant="outlined"
							color="primary"
							onClick={() => handleViewDetails(zakat)}
						>
							View Details
						</Button>
						<Button
							variant="contained"
							color="success"
							onClick={() => handleAccept(zakat.id_zakat)}
							disabled={zakat.is_accepted}
							sx={{ ml: 2 }}
						>
							{zakat.is_accepted ? "Accepted" : "Accept"}
						</Button>
						<Button
							variant="contained"
							color="error"
							onClick={() => handleDelete(zakat.id_zakat)}
							sx={{ ml: 2 }}
						>
							Delete
						</Button>
					</ListItem>
				))}
			</List>

			{/* Zakat Details Dialog */}
			<Dialog open={isDetailsOpen} onClose={handleCloseDetails} maxWidth="sm" fullWidth>
				<DialogTitle>Zakat Details</DialogTitle>
				<DialogContent>
					{selectedZakat && (
						<Card>
							<CardMedia
								component="img"
								height="200"
								image={`http://127.0.0.1:8000/media/zakat_images/${selectedZakat.hero_image}`} // Serve media correctly
								alt="Hero Image"
							/>
							<CardContent>
								<Typography variant="h5" component="div">
									{selectedZakat.nama_mz}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									<b>Jenis Kelamin:</b> {selectedZakat.jk_mz === "P" ? "Pria" : "Wanita"}
									<br />
									<b>No Telepon:</b> {selectedZakat.no_telp_mz}
									<br />
									<b>Email:</b> {selectedZakat.email_mz}
									<br />
									<b>Tanggal Zakat:</b> {selectedZakat.tgl_Zakat}
									<br />
									<b>Nominal:</b> Rp {selectedZakat.nominal}
								</Typography>
							</CardContent>
						</Card>
					)}
				</DialogContent>
			</Dialog>
		</Container>
	);
};

export default Zakat;
