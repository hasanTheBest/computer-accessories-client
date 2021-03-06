import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function useProductSchema() {
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  // const validateImageType = (value) => {
  //   if (value) {
  //     let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
  //     return SUPPORTED_FORMATS.includes(type);
  //   }
  // };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    quantity: Yup.number().positive().required("Quantity is required"),
    price: Yup.number().min(0).required("Price is required"),
    min_order: Yup.number().positive().required("Min Order is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.mixed().required(
      "A image file is required with jpg, jpeg, png, gif extension"
    ),
    // .test(
    //   "fileSize",
    //   "File too large",
    //   (value) => value === null || (value && value.size <= 1000000000)
    // )
    // .test(
    //   "fileFormat",
    //   "Unsupported file type",
    //   (value) =>
    //     value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    // ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}

export default useProductSchema;
