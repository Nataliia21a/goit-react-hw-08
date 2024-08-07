import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

export default function RegistrationPage() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <RegistrationForm />
      {isError && <Error />}
      {isLoading && <Loader />}
    </>
  );
}
