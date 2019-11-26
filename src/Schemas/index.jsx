import * as Yup from 'yup';
export default class Schema {
  getSchema() {
    return Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email address')
        .required('This Field is Required !'),
      password: Yup.string()
        .required('This Field is Required !'),
      confPassword: Yup.string()
        .required('This Field is Required !')
        .oneOf([Yup.ref('password')], 'Password Should match with Conf Password'),
      dob: Yup.string()
        .required('Required')
        .test(
          "min-age-validation",
          "You must be over 18 to register",
          async function (values) {
            let minAge = new Date();
            minAge.setFullYear(minAge.getFullYear() - 18);
            return minAge.getTime() >= new Date(values).getTime();
          }),
      startDate: Yup.string()
        .required('This Field Is Required'),
      endDate: Yup.string()
        .required('This Field Is Required'),
      favItem: Yup.object({}).
        test(
          'required',
          'You need to choose One',
          async function (values) {
            console.log(Object.values(values).includes(true));
            return Object.values(values).includes(true);
          }
        )




    })
  }
}