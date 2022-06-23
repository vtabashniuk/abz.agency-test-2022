import React from 'react';
import Button from 'components/Button';

const HomePage = ({ title, mainText }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{mainText}</p>
      <Button label="sign up" />
    </section>
  );
};

export default HomePage;
