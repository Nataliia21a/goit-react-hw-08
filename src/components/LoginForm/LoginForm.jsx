import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "../LoginForm/LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Еmail address must contain the @ sign")
    .required("Required"),
  password: Yup.string()
    .min(7, "Minimum 7 letters")
    .max(30, "Maximum 30 letters")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <h2 className={css.title}>Please, log in</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm}>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.errorMessage} name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage className={css.errorMessage} name="password" />
          </label>
          <button className={css.loginBtn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
