import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changewidth = () => {
      setLargeur(window.innerWidth);
    };
    window.addEventListener("resize", changewidth);
    return () => {
      window.removeEventListener("resize", changewidth);
    };
  }, []);

  return (
    <>
      <nav>
      {(toggleMenu || largeur > 500 ) && (
        <ul className="liste">
          <li className="items">
            <Link to="/">Accueil</Link>
          </li>
          <li className="items">
          <Link to="/ecrire">Ecrire</Link>
          </li>
          <li className="items">
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        Bouton
      </button>
    </nav>
    <hr style={{margin:"50px 0 0 0"}} />
    </>
  
  
  );
}
