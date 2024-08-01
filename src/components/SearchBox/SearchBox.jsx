import css from "../SearchBox/SearchBox.module.css";
import { changeFilter, selectFilterName } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterName);

  const handlerChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor="">
        Find contact by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        value={filterName}
        onChange={handlerChange}
      />
    </div>
  );
}
