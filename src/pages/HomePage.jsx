import React from 'react';
import ButtonLink from '../components/ButtonLink';

const HomePage = ({ title, mainText }) => {
  return (
      <section className='mainSection'>
        <h1 className='title'>{title}</h1>
        <p className='text'>{mainText}</p>
        <ButtonLink label="sign_up" />
      </section>
  );
};

export default HomePage;
