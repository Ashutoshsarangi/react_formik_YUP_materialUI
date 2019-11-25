import React from 'react'
import { Checkbox as MaterialCheckBox, FormControlLabel, FormLabel, FormGroup } from '@material-ui/core';


const checkBox = ({ setFieldValue, field, form: { touched, errors }, ...props }) => {
  const changeValue = (data) => {
    const new_value = { ...props.value, [data]: !props.value[data] };
    setFieldValue(field.name, new_value);
  }
  return (
    <>
      <FormLabel component="legend">I Like</FormLabel>
      {
        Object.keys(props.value).map((data) => {
          return (
            <FormControlLabel key={data.toString()}
              control={
                <MaterialCheckBox checked={props.value[data]} onChange={_ => changeValue(data)} color="primary" key={data.toString()} />
              }
              label={data}
            />
          );
        })
      }
      <div className="h-16 text-error">
        {errors[field.name] && touched[field.name] ? errors[field.name] : ""}
      </div>
    </>
  );
}
export default checkBox;