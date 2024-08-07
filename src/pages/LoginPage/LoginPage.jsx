import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import LoginForm from "../../components/LoginForm/LoginForm";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

export default function LoginPage() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <h2>Please, log in</h2>
      <LoginForm />
      {isError && <Error />}
      {isLoading && <Loader />}
    </>
  );
}
