import React, { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import classes from './HomePage.module.css';
import address from '../Assets/address.png';
import email from '../Assets/email.png';
import telephone from '../Assets/telephone.png';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.lastNotifiedUid === 'LTYY8keIOabtKGVA6q5WVaYY2Me2') {
      navigate('/admin');
    } else if (auth.lastNotifiedUid) {
      navigate('/user');
    }
  }, []);

  return (
    <div className={classes.homePage}>
      <Carousel />

      <section id="quem-somos" className={classes.about}>
        <div>
          <h2>Conheça a Borali sla oq</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consectetur, odit, est tenetur at explicabo velit ex doloremque
            debitis nisi rem error soluta, voluptas impedit corrupti excepturi
            exercitationem vitae id. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Totam, tempore! Inventore deserunt assumenda animi
            soluta praesentium accusamus eum hic, molestias dolorum optio! Atque
            commodi rerum obcaecati odio culpa quisquam quia!
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station_23-2150368766.jpg?size=626&ext=jpg&ga=GA1.2.180378121.1688653079&semt=sph"
          alt="segurança"
          srcset=""
        />
      </section>
      <section id="servicos" className={classes.work}>
        <h2>Conheça nosso trabalho</h2>

        <ul>
          <li>
            <img
              src="https://img.freepik.com/free-photo/security-camera-with-glass-building-background_657883-231.jpg?size=626&ext=jpg&ga=GA1.1.180378121.1688653079&semt=sph"
              alt=""
            />
            <h3>Câmeras</h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              saepe ducimus sint mollitia ipsa? Delectus molestias quasi
              assumenda quod laudantium repudiandae deserunt, nisi inventore
              ipsum nostrum dolores hic ea tenetur.
            </p>
          </li>
          <li>
            <img
              src="https://img.freepik.com/free-photo/security-camera-with-glass-building-background_657883-231.jpg?size=626&ext=jpg&ga=GA1.1.180378121.1688653079&semt=sph"
              alt=""
            />
            <h3>Câmeras</h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              saepe ducimus sint mollitia ipsa? Delectus molestias quasi
              assumenda quod laudantium repudiandae deserunt, nisi inventore
              ipsum nostrum dolores hic ea tenetur.
            </p>
          </li>
          <li>
            <img
              src="https://img.freepik.com/free-photo/security-camera-with-glass-building-background_657883-231.jpg?size=626&ext=jpg&ga=GA1.1.180378121.1688653079&semt=sph"
              alt=""
            />
            <h3>Câmeras</h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              saepe ducimus sint mollitia ipsa? Delectus molestias quasi
              assumenda quod laudantium repudiandae deserunt, nisi inventore
              ipsum nostrum dolores hic ea tenetur.
            </p>
          </li>
        </ul>
      </section>
      <section id="contato" className={classes.contact}>
        <h2>Fale Conosco</h2>
        <div className={classes.info}>
          <div>
            <h3>
              <img src={address} alt="" srcset="" />
              Nosso Endereço
            </h3>
            <p>Rua de não sei onde e tal</p>
          </div>
          <div>
            <h3>
              <img src={email} alt="" srcset="" />
              Telefone
            </h3>
            <p>(11) 9 7390-3552</p>
          </div>
          <div>
            <h3>
              <img src={telephone} alt="" srcset="" />
              Email
            </h3>
            <p>diogenes.borali@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
