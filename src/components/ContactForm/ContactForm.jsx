import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "../ContactForm/ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 letters")
    .max(50, "Maximum 50 letters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Minimum 3 numbers")
    .max(50, "Maximum 50 numbers")
    .matches(/^\d+$/, "Must be only digits")
    .required("Required"),
  //   id: Yup.string(),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.formInput}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <ErrorMessage className={css.errorMessage} name="name" />
        <label className={css.formLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.formInput}
          type="tel"
          name="number"
          id={numberFieldId}
        ></Field>
        <ErrorMessage className={css.errorMessage} name="number" />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
