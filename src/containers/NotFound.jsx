import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  // React.Fragment
  // <>
  //   <h1>NO ENCONTRADO</h1>
  // </>

  <>
    <section className='bg-purple'>
      <div className='stars'>
        <div className='central-body'>
          <img className='image-404' src='http://salehriaz.com/404Page/img/404.svg' width='300px' alt='' />
          <a href='/' className='btn-go-home' target='_blank' rel='noopener noreferrer'>TAKE ME HOME</a>
        </div>
        <div className='objects'>
          <img className='object_rocket' src='http://salehriaz.com/404Page/img/rocket.svg' width='40px' alt='' />
          <div className='earth-moon'>
            <img className='object_earth' src='http://salehriaz.com/404Page/img/earth.svg' width='100px' alt='' />
            <img className='object_moon' src='http://salehriaz.com/404Page/img/moon.svg' width='80px' alt='' />
          </div>
          <div className='box_astronaut'>
            <img className='object_astronaut' src='http://salehriaz.com/404Page/img/astronaut.svg' width='140px' alt='' />
          </div>
        </div>
        <div className='glowing_stars'>
          <div className='star' />
          <div className='star' />
          <div className='star' />
          <div className='star' />
          <div className='star' />
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
