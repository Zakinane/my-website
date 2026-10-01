import "./Header.css";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header fx-starlight">
        <a href="#">
          <img src="" alt="logo" />
          <h3>Zaki Djaba</h3>
        </a>

        <div className="desktop-menu">
          <h3>Bonefire</h3>
          <h3>Projects</h3>
          <h3>About</h3>
          <h3>Contacts</h3>
        </div>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu fx-starlight ${menuOpen ? "open" : ""}`}>
          <h3>Bonefire</h3>
          <h3>Projects</h3>
          <h3>About</h3>
          <h3>Contacts</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
