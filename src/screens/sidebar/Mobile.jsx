/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Bookmark, Delete, Profile, Archive } from "../../assets";

import "./mobile.css";

const navlinks = [
  { to: "/home", img: Home },
  { to: "/labels", img: Bookmark },
  { to: "/archive", img: Archive },
  { to: "/trash", img: Delete },
  { to: "/profile", img: Profile },
];

export const Mobile = () => {
  return (
    <div className='mobile-wrapper '>
      <div className='mobile-content flex jc-center'>
        <div className='mobile-nav-content'>
          <div className='mobile-nav-items flex flex-row jc-center'>
            {navlinks.map((nav) => (
              <NavLink
                key={nav.to}
                to={nav.to}
                className={({ isActive }) =>
                  isActive ? "mobile-items mobile-link-active " : "mobile-items"
                }>
                <img src={nav.img} alt={nav.to} />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
