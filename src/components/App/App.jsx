import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import css from "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoader, selectError } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoader = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {isError && <Error>Error errorMessage</Error>}
      {isLoader && <Loader />}
      <SearchBox />
      <ContactList />
    </div>
  );
}
