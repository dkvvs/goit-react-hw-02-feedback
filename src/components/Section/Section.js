import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <div className={s.box}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
