import React from 'react';
import css from './BtnTransparent.module.css';
import arrow from '../../images/icons/arrowRedRight.svg';
import arrowDesc from '../../images/icons/arrowBlackRight100.svg'

const BtnTransparent = () => {
  return (
    <div className={css.btnTransparent}>
      <a className={css.btnLink} href="#!">
        детальніше
        <img className={css.btnImgMob} src={arrow} alt="more" />
        <img className={css.btnImgDesc} src={arrowDesc} alt="more" />
      </a>
    </div>
  );
};

export default BtnTransparent;
