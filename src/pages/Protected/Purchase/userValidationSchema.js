import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function useValidationSchema(numberMin, numberMax) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, `Name must be at least 3 characters`)
      .required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    // .oneOf([Yup.ref("password"), null], "Passwords must match")
    quantity: Yup.number()
      .min(numberMin)
      .max(numberMax)
      .required("Quantity is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}

export default useValidationSchema;
