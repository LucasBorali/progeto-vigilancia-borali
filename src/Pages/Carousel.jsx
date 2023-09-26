import React, { useEffect, useState } from 'react';
import classes from './Carousel.module.css';

const slides = [
  {
    img: 'https://img.freepik.com/free-photo/security-guards-workspace_23-2150321656.jpg?size=626&ext=jpg&ga=GA1.1.180378121.1688653079&semt=sph',
    h1: 'Nossos Serviços',
    link: '#servicos',
  },
  {
    img: 'https://img.freepik.com/free-photo/security-guard-workspace_23-2150321649.jpg?w=740&t=st=1695646514~exp=1695647114~hmac=5b1e2377a78fbd6164ab07c42a172d5455993e43aab4ca9142b073313af2b614',
    h1: 'Quem Somos',
    link: '#quem-somos',
  },
  {
    img: 'https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368737.jpg?size=626&ext=jpg&ga=GA1.2.180378121.1688653079&semt=sph',
    h1: 'Fale Conosco',
    link: '#contato',
  },
];

const Carousel = () => {
  const [newIndex, setIndex] = useState(0);

  const numButtons = Math.ceil(slides.length / 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.carousel}>
      <div className={classes.buttons}>
        {Array.from({ length: numButtons }, (_, index) => (
          <button
            className={index === newIndex ? classes.visible : classes.notActive}
            key={index}
            onClick={() => setIndex(index)}
          ></button>
        ))}
      </div>
      <img src={slides[newIndex].img} alt={slides[newIndex].img} />
      <div className={classes.hero}>
        <h1>{slides[newIndex].h1}</h1>
        <a href={slides[newIndex].link}>Saiba mais</a>
      </div>
    </div>
  );
};

export default Carousel;
