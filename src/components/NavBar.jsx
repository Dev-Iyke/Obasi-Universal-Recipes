import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/recipes">recipes</Link>
      <Link to="/favorites">favorites</Link>
    </nav>
  );
};

export default NavBar;
