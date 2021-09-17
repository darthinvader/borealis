import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import Login from "./Login/Login";
import PhoneNavbar from "./PhoneNavbar/PhoneNavbar";
import NavLine from "./NavLine/NavLine";
const Navbar = () => {
  const { width } = useWindowDimensions();
  if (width <= 1000) {
    return <PhoneNavbar />;
  }

  return (
    <>
      <div className={styles.Navbar}>
        <ul className={styles.Categories}>
          <li>
            <Link className={styles.Link} to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link className={styles.Link} to="/generators">
              Generators
            </Link>
          </li>
        </ul>
        <ul style={{ listStyleType: "none" }}>
          <li className={styles.UserLi}>
            <Login />
          </li>
        </ul>
      </div>
      <NavLine />
    </>
  );
};

export default Navbar;
