import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.error("The contact has been deleted ", {
      duration: 2000,
      style: { background: "red", color: "#fff" },
    });
  };

  return (
    <div className={css.contactListItem}>
      <p className={css.contactName}>
        <span className={css.icon}>
          <FaUser />
        </span>
        {contact.name}
      </p>
      <p>
        <span className={css.icon}>
          <BsFillTelephoneFill />
        </span>
        {contact.number}
      </p>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
      <Toaster position="top-right" />
    </div>
  );
}
