import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <p>
      Sorry! The page is not found. Come back to <Link to="/">Home page</Link>{" "}
    </p>
  );
}
