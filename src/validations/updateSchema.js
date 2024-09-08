import * as yup from "yup";

const updateSchema = yup.object().shape({
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
    gender: yup.string(),
    country: yup.string().required("This is a required field"),
})

export default updateSchema;