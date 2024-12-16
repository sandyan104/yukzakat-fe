import React, { useEffect, useState } from "react";
import {
	Box,
	Container,
	Grid,
	Typography,
	Paper
} from "@mui/material";
import styles from "./styles";
import niat from "../../assets/niat.png";
import { useNavigate } from "react-router-dom";

const Artikel = () => {
	const [artikels, setArtikels] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/artikel/") // Replace with your backend URL
			.then((response) => response.json())
			.then((data) => setArtikels(data))
			.catch((error) => console.error("Error fetching artikels:", error));
	}, []);

	return (
		<div style={styles.container}>
			<Typography variant='h4' mt={4} mb={6} color='white' fontWeight={300}>
				<b>Yuk</b>Zakat.id
			</Typography>
			<Container
				disableGutters
				maxWidth="lg"
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
					variant="h4"
					mb={4}
					color="#4a628a"
					fontWeight={700}
					textAlign="center"
				>
					Kabar Zakat
				</Typography>
				<Grid container spacing={3}>
					{artikels.map((artikel) => (
						<Grid item xs={12} md={6} lg={4} key={artikel.id_artikel}>
							<Paper elevation={3} sx={{ padding: 2 }}>
								<img
									src={artikel.hero_image}
									alt={artikel.judul}
									style={{ width: "100%", borderRadius: "8px" }}
								/>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									mt={2}
								>
									{artikel.judul}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Contact Amil: {artikel.no_telp_amil}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
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
	);
};

export default Artikel;
