import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <div className={css.container}>
      <div className={css.contact_name}>
        <BsPersonFill className={css.person_icon} size={16} />
        <span>{name}</span>
      </div>

      <div className={css.contact_number}>
        <FaPhoneAlt className={css.phone_icon} size={16} />
        <span>{number}</span>
      </div>
      <button className={css.button_delete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
