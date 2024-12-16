import {
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
	ButtonBase,
} from "@mui/material";
import styles from "./styles";
import { useState } from "react";
import niat from "../../assets/niat.png";
import { useNavigate } from "react-router-dom";

const Laporan = () => {
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

					<Card sx={{ maxWidth: 'auto' }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="280"
								image="https://randomwordgenerator.com/img/picture-generator/54e6d1464e51aa14f1dc8460962e33791c3ad6e04e507441722a72dc9e4bc7_640.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Oktober 2024
								</Typography>
								<Typography variant="body2" sx={{ color: 'text.secondary' }}>
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
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

export default Laporan;
