import React, { useState } from 'react';
import logo from '../Assets/small-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import classes from './LoginPage.module.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import Loader from '../Components/Loader';

const LogInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const logInHandler = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    console.log(error.message);
  }

  if (user) {
    if (user.user.uid === 'LTYY8keIOabtKGVA6q5WVaYY2Me2') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  }

  return (
    <section className={classes['login-section']}>
      <img src={logo} alt="Borarli Prestação de Serviços" className="logo" />
      <h1>Seja bem-vindo de volta!</h1>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={e => logInHandler(e)}>
          <div>
            <label htmlFor="email">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=linear">
                  <g id="email">
                    <path
                      id="vector"
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke="#262626"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="vector_2"
                      d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                      stroke="#262626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                  stroke="#262626"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
                  fill="#262626"
                />
                <path
                  d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                  fill="#262626"
                />
                <path
                  d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
                  fill="#262626"
                />
              </svg>
            </label>
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit">Entrar</button>
          <p>
            Não possui uma conta?{' '}
            <Link to="/sign-in" className={classes.link}>
              Registre-se aqui
            </Link>
          </p>

          <Link to="/">Cancelar</Link>
        </form>
      )}
    </section>
  );
};

export default LogInPage;
