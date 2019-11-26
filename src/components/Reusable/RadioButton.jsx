import React from 'react'
import { Checkbox as MaterialCheckBox, FormControlLabel, FormLabel, FormGroup, makeStyles, Radio, RadioGroup } from '@material-ui/core';


const RadioButton = ({ setFieldValue, field, form: { touched, errors }, ...props }) => {
  const useStyles = makeStyles(theme => ({
    customError: {
      margin: theme.spacing(2, 0, 1, 0),
    },
  }))
  const classes = useStyles();
  const changeValue = (data) => {
    const new_value = { ...props.value, [data]: !props.value[data] };
    setFieldValue(field.name, new_value);
    touched[field.name] = 'need to select';
  }
  return (
    <div className={classes.customError}>
      <RadioGroup aria-label="position" name="position"
        value={props.value} row
        margin="normal"

      >
        <FormLabel component="legend">Gender</FormLabel>
        {
          Object.keys(props.value).map((data) => {
            return (
              <FormControlLabel key={data.toString()}
                control={
                  <Radio color="primary" />
                }
                value="male"
                label={data}
                labelPlacement="end"
              />

            );
          })
        }
      </RadioGroup>
      <div className='h-16 text-error'>
        {errors[field.name] && touched[field.name] ? errors[field.name] : ""}
      </div>
    </div>
  );
}
export default RadioButton;