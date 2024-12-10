import { Button, Grid2 as Grid, Typography } from "@mui/material";
import styles from "./styles";
import {
	AssessmentOutlined,
	CalculateOutlined,
	PublicOutlined,
	RedeemOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

const Home = () => {
	let navigate = useNavigate();
	return (
		<>
			<div style={styles.container}>
				<Typography variant='h4' mt={4} color='white' fontWeight={300}>
					<b>Yuk</b>Zakat.id
				</Typography>
				<Typography
					variant='h3'
					mt={10}
					color='white'
					fontStyle='italic'
					fontWeight={400}
				>
					The click with thousand blessings
				</Typography>
				<Typography variant='h5' mt={1} color='white' fontWeight={200}>
					Tunaikan zakat hanya dengan sentuhan jari anda
				</Typography>

				<Grid sx={{ width: "65%" }} container mt={10} spacing={5}>
					<Grid
						size={3}
						justifyItems='center'
						border='6px solid white'
						borderRadius={6}
						paddingY={4}
						component={Button}
						display="flex"
						flexDirection="column"
						textTransform="capitalize"
						onClick={() => {navigate("/zakat")}}
					>
						<RedeemOutlined sx={{ fontSize: "80px" }} htmlColor='white' />
						<Typography
							variant='h5'
							fontWeight={600}
							textAlign='center'
							color='white'
							mt={1}
						>
							Bayar
							<br />
							Zakat
						</Typography>
					</Grid>
					<Grid
						size={3}
						justifyItems='center'
						border='6px solid white'
						borderRadius={6}
						paddingY={4}
						component={Button}
						display="flex"
						flexDirection="column"
						textTransform="capitalize"
						onClick={() => {navigate("/kalkulator")}}
					>
						<CalculateOutlined sx={{ fontSize: "80px" }} htmlColor='white' />
						<Typography
							variant='h5'
							fontWeight={600}
							textAlign='center'
							color='white'
							mt={1}
						>
							Kalkulator
							<br />
							Zakat
						</Typography>
					</Grid>
					<Grid
						size={3}
						justifyItems='center'
						border='6px solid white'
						borderRadius={6}
						paddingY={4}
						component={Button}
						display="flex"
						flexDirection="column"
						textTransform="capitalize"
						onClick={() => {navigate("/laporan")}}
					>
						<AssessmentOutlined sx={{ fontSize: "80px" }} htmlColor='white' />
						<Typography
							variant='h5'
							fontWeight={600}
							textAlign='center'
							color='white'
							mt={1}
						>
							Laporan
							<br />
							Zakat
						</Typography>
					</Grid>
					<Grid
						size={3}
						justifyItems='center'
						border='6px solid white'
						borderRadius={6}
						paddingY={4}
						component={Button}
						display="flex"
						flexDirection="column"
						textTransform="capitalize"
						onClick={() => {navigate("/kabar")}}
					>
						<PublicOutlined sx={{ fontSize: "80px" }} htmlColor='white' />
						<Typography
							variant='h5'
							fontWeight={600}
							textAlign='center'
							color='white'
							mt={1}
						>
							Kabar
							<br />
							Zakat
						</Typography>
					</Grid>
				</Grid>
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

export default Home;
