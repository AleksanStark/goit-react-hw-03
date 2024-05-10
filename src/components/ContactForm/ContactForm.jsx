import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const id = useId();

  const handleSubmit = (values, actions) => {
    values.id = nanoid(4);
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field
          className={css.form_input}
          type="text"
          name="name"
          id={`${id}-name`}
        />
        <label htmlFor={`${id}-number`}>Number</label>
        <Field
          className={css.form_input}
          type="text"
          name="number"
          id={`${id}-number`}
        />
        <button className={css.form_button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
