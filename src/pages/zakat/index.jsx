import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2 as Grid,
	InputAdornment,
	InputLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import styles from "./styles";
// import { useState } from "react";
import niat from "../../assets/niat.png";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

const Zakat = () => {
	let navigate = useNavigate();
	// const {handleSubmit, control} = useForm()

	// const handleChange = (event) => {
	// 	setAge(event.target.value);
	// };

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
						Formulir Zakat
					</Typography>
					<TextField
						label='Nama'
						variant='outlined'
						fullWidth
						sx={{ marginBottom: "20px" }}
					/>
					<FormControl sx={{ marginBottom: "20px" }} fullWidth>
						<FormLabel id='demo-radio-buttons-group-label'>
							Jenis Kelamin
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='pria'
							name='radio-buttons-group'
						>
							<FormControlLabel value='pria' control={<Radio />} label='Pria' />
							<FormControlLabel
								value='wanita'
								control={<Radio />}
								label='Wanita'
							/>
						</RadioGroup>
					</FormControl>
					<TextField
						label='Nomor Telepon/Whatsapp'
						variant='outlined'
						fullWidth
						sx={{ marginBottom: "20px" }}
					/>
					<TextField
						label='Email'
						variant='outlined'
						fullWidth
						sx={{ marginBottom: "20px" }}
					/>
					<FormControl fullWidth sx={{ marginBottom: "20px" }}>
						<InputLabel id='demo-simple-select-label'>Jenis Zakat</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							// value={age}
							label='Jenis Zakat'
							// onChange={handleChange}
						>
							<MenuItem value={10}>Mal</MenuItem>
							<MenuItem value={20}>Fitrah</MenuItem>
							<MenuItem value={30}>Penghasilan</MenuItem>
							<MenuItem value={30}>Emas</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Nominal'
						variant='outlined'
						fullWidth
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position='start'>Rp</InputAdornment>
								),
							},
						}}
						sx={{ marginBottom: "20px" }}
					/>
					<img src={niat} width='80%' style={{ marginBottom: "20px" }} />
					<Grid container sx={{ width: "100%" }} spacing={3}>
						<Grid item size={6}>
							<Button
								fullWidth
								variant='outlined'
								onClick={() => {
									navigate(-1);
								}}
							>
								Kembali
							</Button>
						</Grid>
						<Grid item size={6}>
							<Button fullWidth variant='contained'>
								Bayar Zakat
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
};

export default Zakat;
