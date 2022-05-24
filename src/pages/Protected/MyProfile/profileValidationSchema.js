import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function profileValidationSchema() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    designation: Yup.string()
      .min(3, `Designation must be at least 3 characters`)
      .required("Designation is required"),
    phone: Yup.string().required("Phone number is required"),
    education: Yup.string(),
    address: Yup.string(),
    zip: Yup.string(),
    description: Yup.string(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}

export default profileValidationSchema;
