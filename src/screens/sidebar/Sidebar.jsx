/** @format */

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Home, Bookmark, Delete, Profile, Archive } from "../../assets";

import "./sidebar.css";

const navlinks = [
  { to: "/home", title: "Home", img: Home },
  { to: "/labels", title: "Labels", img: Bookmark },
  { to: "/archive", title: "Archive", img: Archive },
  { to: "/trash", title: "Trash", img: Delete },
];

export const Sidebar = () => {
  return (
    <div className='sidebar-wrapper '>
      <div className='sidebar-content flex flex-col'>
        <div className='sidebar-head flex ai-center jc-start'>
          <NavLink to='/' className='flex'></NavLink>
          <h1 className='sidebar-logo'>DevNote</h1>
        </div>
        <div className='sidebar-nav-content'>
          <div className='sidbar-nav-items'>
            {navlinks.map((link) => {
              return (
                <NavLink
                  to={link.to}
                  key={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "sidebar-items nav-link-active "
                      : "sidebar-items"
                  }>
                  <img src={link.img} alt={link.title} />
                  <span className='nav-title'>{link.title}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className='sidebar-user'>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive ? "sidebar-items nav-link-active " : "sidebar-items"
            }>
            <img src={Profile} alt='home_icon' />
            <span className='nav-title'>Profile</span>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
