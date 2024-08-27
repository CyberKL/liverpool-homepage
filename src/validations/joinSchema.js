import * as yup from "yup";

const joinSchema = yup.object().shape({
  fname: yup.string().required("This is a required field"),
  lname: yup.string().required("This is a required field"),
  email: yup.string().email("Invalid email").required(),
  dob: yup
    .date()
    .typeError("Invalid Date Format")
    .max(new Date(), "Date of birth cannot be in the future")
    .min(
      new Date("1900-01-01"),
      "Date of birth cannot be that far in the past"
    ),
  password: yup
    .string()
    .min(8, "Password has to be between 8 and 30 characters long")
    .max(30, "Password has to be between 8 and 30 characters long")
    .matches(/\d/, "Password has to contain at least one number")
    .matches(
      /[A-Z]/,
      "Password has to contain at least one uppercase character"
    )
    .matches(
      /[a-z]/,
      "Password has to contain at least one lowercase character"
    )
    .matches(/\W/, "Password has to contain at least one special character")
    .required(),
  conPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and password confirmation have to match"
    )
    .required(),
  gender: yup.string(),
  country: yup.string().required("This is a required field"),
  options: yup.object().shape({
    offers: yup.boolean(),
    newsletters: yup.boolean(),
    foundation: yup.boolean(),
    partners: yup.boolean(),
    email: yup.boolean(),
    sms: yup.boolean(),
    mail: yup.boolean(),
    telephone: yup.boolean(),
    other: yup.boolean(),
  }),
});

export default joinSchema;
