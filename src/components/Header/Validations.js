import * as Yup from "yup";

const validations = Yup.object({
    todo: Yup.string().required("Todo is required!"),
  })

export default validations;
