import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="darkgreen"
        secondaryColor="grey"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
