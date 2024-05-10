import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = ({ listOfContacts, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {listOfContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDelete} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
