import "./Header.css";
import { FaLaptopCode } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/Leadership", label: "leadership" },
  { to: "/Tracks", label: "tracks" },
  { to: "/Events", label: "events" },
];

function Header() {
  return (
    <header className="header">
      <LogoContainer />
      <HeaderNav />
    </header>
  );
}

function LogoContainer() {
  return (
    <div className="logo-container">
      <FaLaptopCode />
      <p className="logo-text">murang'a university tech club</p>
    </div>
  );
}

function HeaderNav() {
  return (
    <nav className="header-nav">
      <ol className="navs-list">
        {navLinks.map((navLink) => (
          <li key={navLink.label}>
            <NavLink
              to={navLink.to}
              className={({ isActive }) =>
                isActive === true ? "active-link" : ""
              }
            >
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Header;
