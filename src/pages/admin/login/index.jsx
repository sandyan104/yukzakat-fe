import { Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmailTxf from "./Email";
import PasswordTxf from "./Password";
import AxiosInstance from "../../../utils/AxiosInstance";

const Login = () => {
	const navigate = useNavigate();
	const { handleSubmit, control } = useForm();

	const submission = (data) => {
		AxiosInstance.post(`login/`, {
			email: data.email,
			password: data.password,
		})

			.then((response) => {
				console.log(response);
				localStorage.setItem("Token", response.data.token);
				navigate(`/admin`);
			})
			.catch((error) => {
				console.error("Error during login", error);
			});
	};

	return (
		<>
			<Container
				disableGutters
				maxWidth='xs'
				sx={{
					borderRadius: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "80px",
					padding: "30px",
				}}
			>
				<Typography mb={4} mt={12} color='#4a628a' textAlign='center' fontSize={30}>
					Login Admin <b>Yuk</b>Zakat.id
				</Typography>

				<EmailTxf label={"E-mail"} name={"email"} control={control} />
				<br />
				<PasswordTxf label={"Password"} name={"password"} control={control} />
				<br />
				<Button
					onClick={handleSubmit(submission)}
					fullWidth
					variant='contained'
          size="large"
				>
					Login
				</Button>
			</Container>
		</>
	);
};

export default Login;
