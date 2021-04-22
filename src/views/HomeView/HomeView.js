import React from 'react';
import s from './HomeView.module.css';
import Carousel from 'react-bootstrap/Carousel';
import gates from './gates.jpeg';

import phoneBook2 from './phoneBook2.jpg';
import ar from './ar2.txt';
const HomeView = () => (
  <section className={s.HomeView}>
    <h1 className={s.title}>Phone Book</h1>

    <Carousel className={s.carousel}>
      <Carousel.Item>
        <img className="d-block w-100 " src={gates} alt="First slide" />
        <Carousel.Caption>
          <h3 className={s.sliderTitle}>SECURITY</h3>
          <p className={s.sliderText}>Your contacts are safe!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img className="d-block w-100" src={phoneBook2} alt="Second slide" />
        </div>

        <Carousel.Caption>
          <h3 className={s.sliderTitle}>ACCESSIBILITY</h3>
          <p className={s.sliderText}>Contacts are easy to browse</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ar} alt="Third slide" />

        <Carousel.Caption>
          <h3 className={s.sliderTitle}>SIMPLISITY</h3>
          <p className={s.sliderText}>User-friendly interface</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
);
export default HomeView;
