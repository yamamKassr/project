import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        <Link to="" className="text-decoration-none">
          Contacts
        </Link>
        <Link to="" className="text-decoration-none">
          Info
        </Link>
      </nav>
    </header>
  );
};
