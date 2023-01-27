import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div>
      <div>
        <nav>
          <h2>SCIENCENETIC</h2>
          <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <HashLink to={"/#about"}>About</HashLink> 
            {/* this "#About" is due to a div which is given to a div whose "id=About" so on click the page will sroll to it */}
            <HashLink to={"/#links"}>Links</HashLink>
            <HashLink to={"/#services"}>Services</HashLink>
          </main>
        </nav>
      </div> 
    </div>
  );
};

export default Header;
