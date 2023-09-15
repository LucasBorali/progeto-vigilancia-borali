import React, { useRef, useState } from 'react';
import classes from './SignInPage.module.css';
import logo from '../Assets/small-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { addNewUserData } from '../Store/users-actions';
import Loader from '../Components/Loader';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const newUserForm = useRef(null);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const newUser = () => {
    const formData = new FormData(newUserForm.current);
    return {
      name: formData.get('name'),
      cpf: formData.get('cpf'),
      address: formData.get('address'),
      phone: formData.get('phone'),
      email: formData.get('email'),
    };
  };

  const createUserHandler = e => {
    e.preventDefault();
     const userData = newUser();

    createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const userCred = userCredential.user;

        if (userCred) {
         
          dispatch(addNewUserData(userData, userCred.uid));
          navigate('/user');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (error) {
    console.log(error.message);
  }

  return (
    <div className={classes.register}>
      <img src={logo} alt="Borali Prestação de Serviços" className="logo" />
      {loading ? <h1>Quase pronto...</h1> : <h1>Faça seu cadastro!</h1>}

      {loading ? (
        <Loader />
      ) : (
        <form ref={newUserForm} onSubmit={e => createUserHandler(e)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite o nome completo"
            />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <input
              name="cpf"
              type="text"
              id="cpf"
              placeholder="Apenas números"
            />
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input
              name="address"
              type="text"
              id="address"
              placeholder="Rua, número da casa, bairro"
            />
          </div>
          <div>
            <label htmlFor="phone">Celular</label>
            <input
              name="phone"
              type="text"
              id="phone"
              placeholder="Apenas números"
            />
          </div>
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
              name="email"
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">
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
              name="password"
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Senha"
              required
            />
          </div>

          <button type="submit">Cadastrar</button>

          <p>
            Já possui uma conta?{' '}
            <Link to="/Log-in" className={classes.link}>
              Entrar
            </Link>
          </p>

          <Link to="/">Cancelar</Link>
        </form>
      )}
    </div>
  );
};

export default SignInPage;
