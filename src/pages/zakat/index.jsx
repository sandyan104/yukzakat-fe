import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import styles from "./styles";

const Zakat = () => {
	const [formData, setFormData] = useState({
		nama_mz: "",
		jk_mz: "P",
		no_telp_mz: "",
		email_mz: "",
		tgl_Zakat: new Date().toISOString().split("T")[0], // Default to today
		id_tipe: "",
		id_rekap: 1, // Replace with your logic for assigning `id_rekap`
	});

	// Handle form changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				"http://localhost:8000/zakat/",
				formData
			);
			console.log("Success:", response.data);
			alert("Zakat entry created successfully!");
		} catch (error) {
			console.error("Error submitting zakat:", error);
			alert("Failed to submit zakat.");
		}
	};

	const [image, setImage] = useState(null);
	const [preview, setPreview] = useState(null);

	// Handle file change
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);

			// Generate preview
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	// Handle form submission
	const handleSubmitImage = async (e) => {
		e.preventDefault();

		// Create FormData object
		const data = new FormData();
		data.append("nama_mz", formData.nama_mz);
		data.append("jk_mz", formData.jk_mz);
		data.append("no_telp_mz", formData.no_telp_mz);
		data.append("email_mz", formData.email_mz);
		data.append("tgl_Zakat", formData.tgl_Zakat);
		data.append("id_tipe", formData.id_tipe);
		data.append("id_rekap", formData.id_rekap);
		data.append("nominal", formData.nominal);
		if (image) data.append("hero_image", image);

		try {
			const response = await axios.post("http://localhost:8000/zakat/", data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			alert("Zakat entry created successfully!");
		} catch (error) {
			console.error("Error submitting zakat:", error);
			alert("Failed to submit zakat.");
		}
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
						Formulir Zakat
					</Typography>
					<TextField
						label='Nama'
						variant='outlined'
						fullWidth
						name='nama_mz'
						value={formData.nama_mz}
						onChange={handleChange}
						sx={{ marginBottom: "20px" }}
					/>
					<FormControl sx={{ marginBottom: "20px" }} fullWidth>
						<FormLabel id='gender-label'>Jenis Kelamin</FormLabel>
						<RadioGroup
							row
							aria-labelledby='gender-label'
							name='jk_mz'
							value={formData.jk_mz}
							onChange={handleChange}
						>
							<FormControlLabel value='P' control={<Radio />} label='Pria' />
							<FormControlLabel value='W' control={<Radio />} label='Wanita' />
						</RadioGroup>
					</FormControl>
					<TextField
						label='Nomor Telepon/Whatsapp'
						variant='outlined'
						fullWidth
						name='no_telp_mz'
						value={formData.no_telp_mz}
						onChange={handleChange}
						sx={{ marginBottom: "20px" }}
					/>
					<TextField
						label='Email'
						variant='outlined'
						fullWidth
						name='email_mz'
						value={formData.email_mz}
						onChange={handleChange}
						sx={{ marginBottom: "20px" }}
					/>
					<FormControl fullWidth sx={{ marginBottom: "20px" }}>
						<InputLabel id='zakat-type-label'>Jenis Zakat</InputLabel>
						<Select
							labelId='zakat-type-label'
							name='id_tipe'
							value={formData.id_tipe}
							onChange={handleChange}
						>
							<MenuItem value={1}>Mal</MenuItem>
							<MenuItem value={2}>Fitrah</MenuItem>
							<MenuItem value={3}>Penghasilan</MenuItem>
							<MenuItem value={4}>Emas</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Nominal'
						variant='outlined'
						fullWidth
						name='nominal'
						value={formData.nominal}
						onChange={handleChange}
						InputProps={{
							startAdornment: (
								<Typography sx={{ marginRight: 1 }}>Rp</Typography>
							),
						}}
						sx={{ marginBottom: "20px" }}
					/>

					<Stack direction='row' spacing={2} sx={{ width: "100%" }} mb={3}>
						<TextField
							label='Bukti Pembayaran'
							fullWidth
							InputProps={{
								startAdornment: <></>,
								endAdornment: (
									<Button onClick={handleSubmitImage} color='primary'>
										Submit
									</Button>
								),
							}}
							type='file'
							accept='image/*'
							onChange={handleFileChange}
						/>
					</Stack>
					{preview && <img src={preview} alt='Preview' width='200' />}

					<Button
						fullWidth
						variant='contained'
						onClick={handleSubmit}
						sx={{ marginBottom: "20px" }}
					>
						Bayar Zakat
					</Button>
				</Container>

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
			</div>
		</>
	);
};

export default Zakat;
