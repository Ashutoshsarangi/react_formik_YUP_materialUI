import React, { useRef } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider, KeyboardDatePicker
} from '@material-ui/pickers';


const DateField = ({ setFieldValue, field, form: { touched, errors }, ...props }) => {

  const fieldRef = useRef();
  const changeValue = (date) => {
    setFieldValue(field.name, date)
  }
  const onBlurCalender = (e) => {
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...field}
          {...props}
          onChange={changeValue}
          error={errors[field.name] && touched[field.name]}
          onClose={onBlurCalender}
        // ref={(...ref) => console.log(ref)}
        />
      </MuiPickersUtilsProvider>
      <div className="h-16 text-error">
        {errors[field.name] && touched[field.name] ? errors[field.name] : ""}
      </div>

    </>
  );
}
export default DateField;