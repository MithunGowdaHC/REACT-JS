import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
const Header = () => {
  let [btnNameReact, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnName("logout")
                : setBtnName("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
