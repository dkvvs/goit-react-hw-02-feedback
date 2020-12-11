import React from 'react';
import PropTipes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <div className={s.box}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  </section>
);

Section.propTipes = {
  title: PropTipes.string.isRequired,
  children: PropTipes.node.isRequired,
};

export default Section;
