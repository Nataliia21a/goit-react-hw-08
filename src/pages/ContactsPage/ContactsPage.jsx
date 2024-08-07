import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoader, selectError } from "../../redux/contacts/selectors";
import css from "../../pages/ContactsPage/ContactPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoader = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      {isError && <Error />}
      {isLoader && <Loader />}
      <SearchBox />
      <ContactList />
    </>
  );
}
