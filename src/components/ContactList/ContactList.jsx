import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
