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
      <LoginForm />
      {isError && <Error />}
      {isLoading && <Loader />}
    </>
  );
}
