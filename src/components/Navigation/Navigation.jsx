import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.home} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.contacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
