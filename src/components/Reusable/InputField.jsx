import React from 'react'
import { TextField } from '@material-ui/core';


const InputField = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <>
      <TextField
        {...field}
        {...props}
        error={errors[field.name] && touched[field.name]}
      />
      <div className="h-16 text-error">
        {errors[field.name] && touched[field.name] ? errors[field.name] : ""}
      </div>
    </>
  );
}
export default InputField;