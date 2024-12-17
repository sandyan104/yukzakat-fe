import { useState } from "react";
import {
	TextField,
	Button,
	Typography,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Grid2 as Grid,
	Container,
} from "@mui/material";
import styles from "./styles";

function formatCurrency(value) {
	if (!value) return "";
	const numericValue = value.replace(/[^0-9]/g, "");
	return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Kalkulator() {
	const [gaji, setGaji] = useState("");
	const [penghasilanLain, setPenghasilanLain] = useState("");
	const [zakat, setZakat] = useState(null);
	const [tipeZakat, setTipeZakat] = useState(null);

	// Calculate total income
	const jumlahPenghasilan =
		parseFloat(gaji.replace(/\./g, "") || 0) +
		parseFloat(penghasilanLain.replace(/\./g, "") || 0);

	const handleGajiChange = (e) => {
		setGaji(formatCurrency(e.target.value));
	};

	const handlePenghasilanLainChange = (e) => {
		setPenghasilanLain(formatCurrency(e.target.value));
	};

	const handleTipeZakat = (e) => {
		setTipeZakat(e.target.value);
	};

	const calculateZakat = () => {
		if (jumlahPenghasilan < 6859394) {
			alert(
				"Gaji per bulan harus lebih dari Rp6.859.394 untuk menghitung Zakat"
			);
		}
		setZakat(jumlahPenghasilan * 0.025); // 2.5% of annual income
	};

	const resetFields = () => {
		setGaji("");
		setPenghasilanLain("");
		setZakat(null);
	};

	return (
		<>
			<div style={styles.container}>
				<Typography variant='h4' mt={4} mb={6} color='white' fontWeight={300}>
					<b>Yuk</b>Zakat.id
				</Typography>
				<Container
					disableGutters
					maxWidth='sm'
					component={Paper}
					sx={{
						borderRadius: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginBottom: "80px",
						padding: "40px",
					}}
				>
					<Typography
						variant='h4'
						mb={4}
						color='#4a628a'
						fontWeight={700}
						textAlign='center'
					>
						Kalkulator Zakat
					</Typography>

					<FormControl fullWidth sx={{ marginBottom: "20px" }}>
						<InputLabel id='demo-simple-select-label'>Jenis Zakat</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={tipeZakat}
							label='Jenis Zakat'
							onChange={handleTipeZakat}
						>
							<MenuItem value='mal'>Mal</MenuItem>
							<MenuItem value='fitrah'>Fitrah</MenuItem>
							<MenuItem value='penghasilan'>Penghasilan</MenuItem>
							<MenuItem value='emas'>Emas</MenuItem>
						</Select>
					</FormControl>

					{tipeZakat == "penghasilan" ? (
						<>
							<TextField
								label='Gaji per Bulan'
								variant='outlined'
								fullWidth
								value={gaji}
								onChange={handleGajiChange}
								InputProps={{
									startAdornment: (
										<Typography sx={{ marginRight: 1 }}>Rp</Typography>
									),
								}}
								sx={{ mb: 2 }}
							/>

							<TextField
								label='Penghasilan lain per Bulan'
								variant='outlined'
								fullWidth
								value={penghasilanLain}
								onChange={handlePenghasilanLainChange}
								InputProps={{
									startAdornment: (
										<Typography sx={{ marginRight: 1 }}>Rp</Typography>
									),
								}}
								sx={{ mb: 2 }}
							/>

							<Typography variant='h8' fontWeight={500} mt={4}>
								Jumlah Penghasilan per Bulan
							</Typography>

							<Typography variant='h6' fontWeight={700}>
								Rp{jumlahPenghasilan.toLocaleString("id-ID")}
							</Typography>
							<br />
							{zakat !== null && (
								<Typography
									variant='h6'
									mb={4}
									sx={{
										color: "green",
										display: "flex",
										justifyContent: "center",
										textAlign: "center",
										fontWeight: 700,
									}}
								>
									Zakat (2.5%) <br></br> Rp{zakat.toLocaleString("id-ID")}
								</Typography>
							)}
						</>
					) : (
						<p>Sangu</p>
					)}
					<Grid container sx={{ width: "100%" }} spacing={3}>
						<Grid item size={6}>
							<Button fullWidth variant='outlined' onClick={resetFields}>
								Reset
							</Button>
						</Grid>
						<Grid item size={6}>
							<Button fullWidth variant='contained' onClick={calculateZakat}>
								Hitung Zakat
							</Button>
						</Grid>
					</Grid>
				</Container>
			</div>

			<div
				style={{
					width: "100%",
					padding: "50px 80px",
					backgroundColor: "#4A628A",
				}}
			>
				<Typography variant='h5' mb={2} color='white' fontWeight={300}>
					<b>Yuk</b>Zakat.id
				</Typography>
				<Typography variant='body2' color='white' fontWeight={200}>
					Jl. Raya Katapang-Andir, Sangkanhurip, Katapang, Kab.Bandung
					<br />
					Jl. Kebon Bibit Barat, Tamansari, Bandungwetan, Kota Bandung
				</Typography>
			</div>
		</>
	);
}

export default Kalkulator;
