import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function myMultiLine(props) {
  const {label, placeholder, name, control} = props
  return <Controller 
  name={name}
  control={control}
  render={({
    field: { onChange, value },
    fieldState: { error },
    formState,
  }) => 
  <TextField 
  id="standard-multiline-static" 
  label={label} 
  multiline 
  rows={4} 
  defaultValue="Default Value" 
  variant="standard" 
  placeholder={placeholder} 
  />
} />;
}
 