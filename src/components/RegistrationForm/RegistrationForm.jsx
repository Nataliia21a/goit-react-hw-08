import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Minimum 4 letters")
    .max(50, "Maximum 50 letters")
    .required("Required"),
  email: Yup.string()
    .email("Еmail address must contain the @ sign")
    .required("Required"),
  password: Yup.string()
    .min(7, "Minimum 7 letters")
    .max(30, "Maximum 30 letters")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <h2 className={css.title}>Register your account</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Username
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.errorMessage} name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.errorMessage} name="email" />
          </label>

          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
          <ErrorMessage className={css.errorMessage} name="password" />
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
