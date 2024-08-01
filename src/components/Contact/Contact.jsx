import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactListItem}>
      <p className={css.contactName}>
        <FaUser />
        {contact.name}
      </p>
      <p>
        <BsFillTelephoneFill />
        {contact.number}
      </p>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
}
