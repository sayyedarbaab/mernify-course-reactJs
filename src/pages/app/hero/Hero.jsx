import React from 'react';
import style from './Hero.module.css';
import HeroImage from '../../../images/Arbab.png'

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          src={HeroImage}
          alt='hero'
        />
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>MERN Code With Arbaab</h1>
        <p>
        MERN stack stands out for its versatility, efficiency, and end-to-end JavaScript implementation when building web applications. 
        </p>
      </section>
    </header>
  );
}

export default Hero;
