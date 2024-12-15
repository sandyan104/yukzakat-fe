import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

export default function PasswordTxf(props) {
	const [showPassword, setShowPassword] = useState(false);
	const { label, name, control } = props;

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
				// formState,
			}) => (
				<FormControl variant='outlined' fullWidth>
					<InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						onChange={onChange}
						value={value}
						error={!!error}
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label={
										showPassword ? "hide the password" : "display the password"
									}
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									onMouseUp={handleMouseUpPassword}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label={label}
					/>

					<FormHelperText sx={{ color: "red" }}>
						{error?.message}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
}


PasswordTxf.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any
};