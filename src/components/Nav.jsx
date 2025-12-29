import { useState } from "react";
import './Nav.css'

const Nav = () => {

  return (
    <nav className="nav">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/menu">About</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;