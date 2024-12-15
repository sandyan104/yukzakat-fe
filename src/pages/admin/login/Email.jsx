import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

export default function EmailTxf(props) {
	const { label, name, control } = props;
	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
				// formState,
			}) => (
				<TextField
          fullWidth
					id='outlined-basic'
					onChange={onChange}
					value={value}
					label={label}
					variant='outlined'
					error={!!error}
					helperText={error?.message}
				/>
			)}
		/>
	);
}

EmailTxf.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any
};
