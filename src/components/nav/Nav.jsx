import React from "react";
import { Outlet,Link } from "react-router-dom";
import style from "./Nav.module.css";
import Logo from '../../images/logo.jpg'

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to='/'>
            <img
              className={style.logo}
              src={Logo}
              alt="logo"
            />
            </Link>
            <h4> Code With Arbaab </h4>
          </div>
          <div className={style.nav_details}>
          <Link to='/courses'><button>courses</button></Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
