import React, { useState } from "react";

import Link from "./Link";
import { BsEnvelope, BsHouse, BsInfoCircle } from "react-icons/bs";
import "./Sidebar.css";
import Logo from "./Logo";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="sidebar-placeholder">&nbsp;</div>
      <div className="sidebar">
        <div
          className={`sidebar__overlay ${
            toggle ? "sidebar__overlay--active" : ""
          }`}
        >
          &nbsp;
        </div>{" "}
        {/* The reason behind using function to call setToggle(!toggle) is to avoid an infinte loop
           setToggle(!toggle): Means set toggle to the opposite of oldToggle which means 
            => if(toggle === true) setToggle(false) else if (toggle === false) setToggle(true)
        */}
        <button className="sidebar__btn" onClick={() => setToggle(!toggle)}>
          <span
            className={`sidebar__btn__icon ${
              toggle ? "sidebar__btn__icon--active" : ""
            }`}
          >
            &nbsp;
          </span>
        </button>
        {/* Sometimes  there will be a problems when including an svg,
         I like to use it as a compnent to avoid  problems. 👌*/}
        <Logo />
        <ul
          className={`sidebar__list ${toggle ? "sidebar__list--active" : ""}`}
        >
          {/* You can create an array for your links and loop  them here. 🧠*/}
          <Link
            text="Home"
            icon={<BsHouse className="sidebar__icon" />}
            path="/"
          />
          <Link
            text="About"
            icon={<BsInfoCircle className="sidebar__icon" />}
            path="/about"
          />
          <Link
            text="Contact"
            icon={<BsEnvelope className="sidebar__icon" />}
            path="/contact"
          />
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
