/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import { Home, Bookmark, Delete, Profile, Archive } from "../../assets";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className='sidebar-wrapper '>
      <div className='sidebar-content flex flex-col'>
        <div className='sidebar-head flex ai-center jc-start'>
          <NavLink to='/' className='flex'>
            {/* <img src={Logo} alt='devhub_log' width='40px' height='40px' /> */}
          </NavLink>
          <h1 className='sidebar-logo'>DevNote</h1>
        </div>
        <div className='sidebar-nav-content'>
          <div className='sidbar-nav-items'>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Home} alt='home_icon' />
              <span className='nav-title'>Home</span>
            </NavLink>
            <NavLink
              to='/lable'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Bookmark} alt='home_icon' />
              <span className='nav-title'>Labels</span>
            </NavLink>
            <NavLink
              to='/archive'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Archive} alt='home_icon' />
              <span className='nav-title'>Archive</span>
            </NavLink>
            <NavLink
              to='/trash'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Delete} width='24px' alt='home_icon' />
              <span className='nav-title'>Trash</span>
            </NavLink>
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
      </div>
    </div>
  );
};
