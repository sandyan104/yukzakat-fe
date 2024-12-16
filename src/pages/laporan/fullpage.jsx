import {
	ButtonBase,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2 as Grid,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Paper,
	Typography,
} from "@mui/material";
import styles from "./styles";
import { useState } from "react";
import niat from "../../assets/niat.png";
import { useNavigate } from "react-router-dom";

const LaporanDetail = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	}
	return (
		<>
			<div style={styles.container}>
				<Typography variant='h4' mt={4} mb={6} color='white' fontWeight={300}
					component={ButtonBase}
					onClick={routeChange}
				>
					<b>Yuk</b>Zakat.id
				</Typography>
				<Container
					disableGutters
					maxWidth='md'
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
						Laporan Zakat
					</Typography>

					<Typography>
					</Typography>
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

export default LaporanDetail;
