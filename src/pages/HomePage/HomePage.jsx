import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <h1 className={css.title}>
        Welcome! Store and manage your contacts effortlessly.
      </h1>
      <p className={css.description}>
        Our service allows you to store all your important contacts in one
        secure place.
        <br /> Enjoy easy access to your address book from any device, with
        protection against data loss.
      </p>
    </>
  );
}
