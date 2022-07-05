import React from "react";
import "./landing.css";

import { Hero } from "../../assets";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className='landing-wrapper'>
      <header>
        <h1>DevNote</h1>
      </header>
      <div className='landing-content flex flex-row'>
        <div className='landing-image'>
          <img src={Hero} className='img-responsive' alt='hero' />
        </div>
        <div className='landing-cta'>
          <div className='landing-content-desc'>
            <div className='content-primary'>
              <h1> Meet your modern</h1>
              <h1>Note Taking App</h1>
            </div>
            <div className='content-secondary'>
              <p>
                Manage your daily task and workflow in modern way and boost your
                efficiency without any efforts.
              </p>
            </div>
          </div>
          <div className='content-cta'>
            <Link to="/signup" className='btn btn-link'>JOIN NOW</Link>
            <p className='login-link'>
              <Link to='/login'>already have an account ?</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
