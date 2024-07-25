import React from 'react';
import css from './Values.module.css';

import people from '../../images/values/peopleMob.svg';
import star from '../../images/values/starMob.svg';
import montain from '../../images/values/mountainMob.svg';
import sheild from '../../images/values/shieldMob.svg';
import path from '../../images/values/pathMob.svg';

const Values = () => {
  return (
    <section className={css.values}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.valuesTitle}>Наші цінності:</div>
          <ul className={css.valuesGrid}>
            <li className={css.valuesItem}>
              <img className={css.valuesImg} src={people} alt="people" />
              <p className={css.valuesText}>Команда</p>
            </li>
            <li className={css.valuesItem}>
              <img className={css.valuesImg} src={star} alt="star" />
              <p className={css.valuesText}>Експертність</p>
            </li>
            <li className={css.valuesItem}>
              <img className={css.valuesImg} src={montain} alt="montain" />
              <p className={css.valuesText}>Амбіції</p>
            </li>
            <li className={css.valuesItem}>
              <img className={css.valuesImg} src={path} alt="path" />
              <p className={css.valuesText}>Амбіції</p>
            </li>
            <li className={css.valuesItem}>
              <img className={css.valuesImg} src={sheild} alt="shild" />
              <p className={css.valuesText}>Надійність</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Values;
