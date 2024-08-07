import css from "../UserMenu/UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p>
        Welome, <span className={css.username}>{user.name}</span> !
      </p>
      <button onClick={handleClick} type="button" className={css.logoutBtn}>
        Logout
      </button>
    </div>
  );
}
