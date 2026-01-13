import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      <Link
        to="/"
        style={{
          ...styles.link,
          ...(location.pathname === "/" ? styles.active : {}),
        }}
      >
        Users
      </Link>

      <Link
        to="/add"
        style={{
          ...styles.link,
          ...(location.pathname === "/add" ? styles.active : {}),
        }}
      >
        Add User
      </Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "4px",
    backgroundColor: "#e0e0e0",
    color: "#000",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
};

export default Navbar;
