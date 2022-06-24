import React from 'react';
import ButtonLink from '../components/ButtonLink';

const HomePage = ({ title, mainText }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{mainText}</p>
      <ButtonLink label="sign up" />
    </section>
  );
};

export default HomePage;
