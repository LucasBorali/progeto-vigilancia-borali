import logo from '../Assets/small-logo.png';

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes['logo-container']}>
        <img src={logo} alt="Borali prestação de serviços" />
      </div>

      <div className={classes['login-links']}>
        <Link to="/log-in">Entre</Link>
        <Link to="/sign-in">Registre-se</Link>
      </div>
    </nav>
  );
};

export default Navbar;
